// IMPORT
const fs = require('fs');
const Discord = require('discord.js');
const GphApiClient = require('giphy-js-sdk-core')

// config file
const { prefix, token, giphyToken } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
// create a new giphy client
giphy = GphApiClient(giphyToken)

// create a new Discord Collections
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// COMMANDS
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// add commands to collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// listen to messages on the discord server
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // check if it is a command
    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // Check for cooldown on the command 
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // execute the command
    try {
        command.execute(message, args, giphy);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
// login to Discord with your app's token
client.login(token);
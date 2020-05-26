const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
    name: 'settings',
    description: 'Gives all posible commands',
    usage: '',
    execute(message, args, giphy, commands) {
        // configure default messageSettings
        const embedMessageSettings = new Discord.MessageEmbed()
            .setColor('#2ed224')
            .setTitle('Settings')
            .setDescription('Here are all the different commands you can use')
            .setFooter('Thanks for using portal-bot')

        // add commands
        commands.forEach((f) => {
            let props = require(`./${f.name}.js`)

            embedMessageSettings.addField(
                props.name,
                props.description + `\n \`${prefix}${props.name} ${props.usage}\``
            )
        });

        // send message to author
        message.author.send(embedMessageSettings)
    },
};
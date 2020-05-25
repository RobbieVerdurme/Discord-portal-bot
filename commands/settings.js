const Discord = require('discord.js');

module.exports = {
    name: 'settings',
    description: 'settings page',
    execute(message, args, giphy, commands) {
        // configure default messageSettings
        const embedMessageSettings = new Discord.MessageEmbed()
            .setTitle('Settings')
            .setDescription('Here are all the different commands you can use')
            .setFooter('Thanks for using portal-bot')

        // add commands
        commands.forEach((f) => {
            let props = require(`./${f.name}.js`)

            embedMessageSettings.addField(
                `**${props.name}**`,
                `${props.description} \n ${props.usage}`
            )
        });

        // send message to author
        message.author.send(embedMessageSettings)
    },
};
const { channels } = require('../config.json');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
    name: 'close',
    description: 'close the current channel if it is not secured',
    usage: '',
    guildOnly: true,
    async execute(message) {
        const role = message.member.roles.cache.find(role => role.name === message.channel.name)

        // check if he has the role
        if (role) {
            // check if channel is secure
            if (channels.includes(message.channel.name)) {
                message.channel.send('You can\'t delete the this channel')

                // If channel not secure
            } else {
                const millisecondsSleep = 10000

                message.channel.send('That\'s enough for today lets watch some interdimensional cable');
                await sleep(millisecondsSleep)

                role.delete()
                message.channel.delete().catch(console.log)

            }
        } else {
            message.channel.send('You don\'t have the right role to delete this channel')
        }
    }
}
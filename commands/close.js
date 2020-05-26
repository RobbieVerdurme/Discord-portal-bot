const { channels } = require('../config.json');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
    name: 'close',
    description: 'close portal',
    async execute(message, args) {
        const role = message.member.roles.cache.find(role => role.name === message.channel.name)

        if (role) {
            // check channel
            if (channels.includes(message.channel.name)) {
                message.channel.send('You can\'t delete the this channel')

                // check member has role
            } else if (message.member.roles.cache.has(role.id)) {
                const millisecondsSleep = 10000

                message.channel.send('That\'s enough for today lets watch some interdimensional cable');
                await sleep(millisecondsSleep)

                role.delete()
                message.channel.delete().catch(console.log)

            } else {
                message.channel.send('You don\'t have the right role to delete this channel')
            }
        }
    }
}
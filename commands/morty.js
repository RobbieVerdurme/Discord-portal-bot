const { channels } = require('../config.json');

module.exports = {
    name: 'morty',
    description: 'This adds the channel so it can no longer be deleted by the bot',
    usage: '',
    guildOnly: true,
    execute(message) {
        const role = message.member.roles.cache.find(role => role.name === 'rick')

        // check if user has role
        if (role) {
            // check if channel is already secured
            if (channels.includes(message.channel.name)) {
                message.channel.send('You are such a morty morty the channel is already secured')
            } else {
                channels.push(message.channel.name)
                message.channel.send('Channel secure')
            }
        } else {
            message.channel.send('Your sutch a dick')
        }
    },
};
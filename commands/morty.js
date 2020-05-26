const { channels } = require('../config.json');

module.exports = {
    name: 'morty',
    description: 'This adds the channel so it can no longer be deleted by the bot',
    usage: '',
    execute(message, args) {
        const { cache } = message.guild.roles
        const role = cache.find(role => role.name.toLowerCase() === 'rick')

        if (role.permissions.has('ADMINISTRATOR')) {
            channels.push(message.channel.name)
            message.channel.send('Channel secure')
        } else {
            message.channel.send('Your sutch a dick')
        }
    },
};
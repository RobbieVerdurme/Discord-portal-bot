const { channels } = require('../config.json');

module.exports = {
    name: 'schmeckle',
    description: 'This command removes the secure channel',
    usage: '',
    execute(message) {
        const role = message.member.roles.cache.find(role => role.name === 'rick')

        // check for role
        if (role) {
            const index = channels.indexOf(message.channel.name)
            // check if already removed from channels
            if (index > -1) {
                // remove from channels
                channels.splice(index, 1)
                message.channel.send('removed secure channel')
            } else {
                // if it is already removed
                message.channel.send('Find some other idiot to do it morty')
            }
        } else {
            // if user doesn't have role
            message.channel.send('You can\'t do it now can you')
        }
    }
};
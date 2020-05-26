const { channels } = require('../config.json');

module.exports = {
    name: 'schmeckle',
    description: 'This command removes the secure channel',
    usage: '',
    execute(message, args) {
        const { cache } = message.guild.roles
        const role = cache.find(role => role.name.toLowerCase() === 'rick')

        if (role.permissions.has('ADMINISTRATOR')) {
            const index = channels.indexOf(message.channel.name)
            if (index > -1) {
                channels.splice(index, 1)
                message.channel.send('removed secure channel')
            } else {
                message.channel.send('Find some other idiot to do it morty')
            }
        } else {
            message.channel.send('You can\'t do it now can you')
        }
    },
};
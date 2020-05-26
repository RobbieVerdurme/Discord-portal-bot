const { channels } = require('../config.json');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
    name: 'close',
    description: 'close the current channel if it is not secured',
    usage: '',
    async execute(message, args) {
        if (message.channel.name.includes(channels)) {
            message.channel.send('You can\'t delete the this channel')
        } else {
            const millisecondsSleep = 10000

            message.channel.send('That\'s enough for today lets watch some interdimensional cable');
            await sleep(millisecondsSleep)
            message.channel.delete().catch(console.log)
        }
    }
};
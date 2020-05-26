module.exports = {
    name: 'ping',
    description: 'Ping command!',
    usage: '',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};
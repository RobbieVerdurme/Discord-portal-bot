module.exports = {
    name: 'ping',
    description: 'Ping command!',
    usage: '',
    execute(message) {
        // send pong
        message.channel.send('Pong.');
    },
};
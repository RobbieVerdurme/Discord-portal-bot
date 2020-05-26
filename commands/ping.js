module.exports = {
    name: 'ping',
    description: 'Ping command!',
    usage: '',
    guildOnly: false,
    execute(message) {
        // send pong
        message.channel.send('Pong.');
    },
};
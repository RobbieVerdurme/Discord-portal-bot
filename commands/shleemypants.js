module.exports = {
    name: 'shleemypants',
    description: 'Deletes a given number of messages in the current channel',
    usage: 'number',
    args: true,
    async execute(message, args) {
        if (!isNaN(args)) {
            await message.channel.messages.fetch({ limit: args }).then(messages => {
                message.channel.bulkDelete(messages)
                message.channel.send('Howly caw we timejumped')
            })
        } else {
            message.channel.send('You have go give a number to delete. No you have to give a number. No you . Just shut up all of you')
        }
    },
};
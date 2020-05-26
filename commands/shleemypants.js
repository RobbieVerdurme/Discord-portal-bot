module.exports = {
    name: 'shleemypants',
    description: 'Deletes a given number of messages in the current channel',
    usage: 'number',
    args: true,
    async execute(message, args) {
        // check if args is a number
        if (!isNaN(args)) {
            const numberOfMessagesToDelete = args[0]
            if (numberOfMessagesToDelete > 100) {
                message.channel.send('Thats to much')
            } else {
                // delete messages
                await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                    message.channel.bulkDelete(messages)
                    message.channel.send('Howly caw we timejumped')
                })
            }
        } else {
            // if nu number is given
            message.channel.send('You have go give a number to delete. No you have to give a number. No you . Just shut up all of you')
        }
    },
};
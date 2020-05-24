module.exports = {
    name: 'portal',
    description: 'Portal do an other dimension!',
    execute(message, args, giphy) {
        const randomNumberDimension = Math.round(Math.random() * 1000)
        message.guild.channels.create(`dimension-${randomNumberDimension}`).then(channel => {
            // set topic channel
            channel.setTopic(`Welcome to dimension ${randomNumberDimension}`)

            // search gif portal
            giphy.search('gifs', { 'q': 'portal rick and morty' }).then((response) => {
                const totalResponses = response.data.length
                const responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses
                const responseGif = response.data[responseIndex]

                // send message in new channel
                channel.send(`Welcome to dimension ${randomNumberDimension}`, {
                    files: [responseGif.images.fixed_height.url]
                });

            }).catch(() => {
                // Error
                channel.send('I\'m to drunk for this shit')
            })
        })
    },
};
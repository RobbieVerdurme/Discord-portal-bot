module.exports = {
    name: 'portal',
    description: 'Portal do an other dimension!',
    usage: '',
    guildOnly: true,
    async execute(message, args, giphy) {
        const randomNumberDimension = Math.round(Math.random() * 1000)

        // CREATE CHANNEL
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

        // CREATE ROLE
        const role = await message.guild.roles.create({
            data: {
                name: `dimension-${randomNumberDimension}`,
                color: 'GREEN'
            },
            reason: `You are admin of the dimension-${randomNumberDimension} now`
        })

        // ADD ROLE TO USER
        message.member.roles.add(role.id)

    },
};
const fetch = require('node-fetch');

module.exports = {
    name: 'quote',
    description: 'This gives a random rick and morty quote',
    usage: '',
    execute(message) {
        // get quote from api
        fetch('http://loremricksum.com/api/?paragraphs=1&quotes=1').then(response => response.json()).then(json => {
            message.channel.send(`"${json.data}"`)
        }).catch(console.log)
    },
};
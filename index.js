const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});//intents means what permission you ar giving 

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('friendship')) {

        return message.reply({
            content: "generating quotes on friendship"
        })

    }
    if (message.content.startsWith('motivation')) {

        return message.reply({
            content: "generating quotes on motivation"
        })

    }
    if (message.content.startsWith('love')) {

        return message.reply({
            content: "generating quotes on love"
        })

    }
    if (message.content.startsWith('anger')) {

        return message.reply({
            content: "generating quotes on anger"
        })

    }

    if (message.content.startsWith('side-hustle')) {

        return message.reply({
            content: "generating quotes on side-hustle"
        })

    }
    if (message.content.startsWith('money')) {

        return message.reply({
            content: "generating quotes on money"
        })

    }




    message.reply({
        content: 'Hi this is aarush bot I can create quotes on friendship , motivation , love , anger , money , side-hustle ',
    })
});



































client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply('pong!!')

})
client.login('MTE5NDIxNzQ0Mzg0MTgyMjcyMA.Grh0OI.1g-pf0x_3dvncw9DJjGlPc63EtPBLP79sxxFSI')
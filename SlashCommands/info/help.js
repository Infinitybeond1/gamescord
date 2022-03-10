const { Client, CommandInteraction, MessageEmbed, Message, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "help",
    description: "Shows all of my commands in a nicely formatted embed message",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let helpEmbed = new MessageEmbed()
            .setColor("#36393F")
            .setTitle("GamesCord Help Menu")
            .setDescription("Select a category in the dropdown menu below to see all the commands in the category")

        let menu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("helpMenu")
                    .setPlaceholder("Click me")
                    .addOptions([
                        {
                            label: "Info",
                            description: "These commands give information about the bot",
                            value: "info",
                            emoji: 'ℹ️'
                        },
                        {
                            label: "Games",
                            description: "These commands allow you to play games in discord",
                            value: "games",
                            emoji: '🎮'
                        }
                    ])
            )


        await interaction.followUp({ ephemeral: true, embeds: [helpEmbed], components: [menu]  })
    

    },
};

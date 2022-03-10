const { MessageEmbed } = require('discord.js');
const client = require('../index')

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) {
        return
    };

    if (interaction.values[0] === "info") {
        let helpEmbed = new MessageEmbed()
            .setColor("#36393F")
            .setTitle("ℹ️ Info Commands")
        
        await interaction.reply({ embeds: [helpEmbed], ephemeral: true })
    } else if (interaction.values[0] === "games") {
        await interaction.reply({ embeds: [], ephemeral: true })
    }
    
});
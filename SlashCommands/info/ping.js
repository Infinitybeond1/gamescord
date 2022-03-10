const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let pingMessage = new MessageEmbed()
            .setColor("#36393F")
            .setTitle("🏓 Ping: " + client.ws.ping)
        interaction.followUp({ embeds: [pingMessage] });
    },
};

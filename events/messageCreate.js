const { Events } = require('discord.js');
const { rizzChannelId } = require('../config.json');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(interaction) {
        if (interaction.author.bot) return;

        if (interaction.content.toLowerCase().includes("mason") || interaction.author.id === "151877362433130497") {
            const emoji = interaction.client.emojis.cache.get("1050545110452011078")
            await interaction.channel.send(`${emoji}`);
            return;
        }

        if (!interaction.content.toLowerCase().includes("rizz") && interaction.channelId === rizzChannelId) {
            await interaction.delete();
        }
    }
}
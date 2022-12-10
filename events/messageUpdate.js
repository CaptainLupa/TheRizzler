const { Events } = require('discord.js');
const { rizzChannelId } = require('../config.json');

module.exports = {
    name: Events.MessageUpdate,
    once: false,
    async execute(oldMessage, newMessage) {
        if (newMessage.author.bot || oldMessage.author.bot) return;

        if (!newMessage.content.toLowerCase().includes("rizz") && newMessage.channelId === rizzChannelId) {
            await newMessage.delete();
        }
    }
}
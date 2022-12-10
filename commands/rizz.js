const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rizz')
        .setDescription("Rizzles"),

    async execute(interaction) {
        await interaction.delete();
        await interaction.channel.send("You wanna get TBell?");
    },
};
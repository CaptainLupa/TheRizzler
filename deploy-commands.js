const { REST, Routes } = require('discord.js');
const { guildId, rizzlerId, token } = require('./config.json');
const fs = require('fs');

module.exports = {
    async registerSlashCommands() {
        const commands = [];

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            commands.push(command.data.toJSON());
        }

        const rest = new REST().setToken(token);

        try {
            console.log(`Started refreshing slash commands`);

            const data = await rest.put(Routes.applicationCommands(rizzlerId, guildId), {body: commands});

            console.log("We've managed to avoid drowning. Good job!")
        } catch (e) {
            console.error(e);
        }
    }
}

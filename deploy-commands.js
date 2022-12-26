const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js')
const { asbGuildId, cerberusGuildId, rizzlerId, token } = require('./config.json');
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

            await rest.put(Routes.applicationCommands(rizzlerId, asbGuildId), {body: commands});
            await rest.put(Routes.applicationCommands(rizzlerId, cerberusGuildId), {body: commands});

            console.log("We've managed to avoid drowning. Good job!")
        } catch (e) {
            console.error(e);
        }
    }
}

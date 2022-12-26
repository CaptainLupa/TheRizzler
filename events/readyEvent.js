const { Events, ActivityType} = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`The Rizzler is online. Running on ${client.guilds}`)
        client.user.setActivity('Rizz', {type: ActivityType.Listening});
    }
}
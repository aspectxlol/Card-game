const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config/config.json');
const moment = require('moment');
require('colors')

const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => {
		console.log(`[Server] `.blue + `[Commands]`.cyan + `: attempting to update commands at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
		console.log(`[Server] `.blue + `[Commands]`.cyan + `: Successfully Updated Commands at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
	})
	.catch(console.error);
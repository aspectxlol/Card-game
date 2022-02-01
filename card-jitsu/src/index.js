const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, uri } = require('./config/config.json');
const moment = require('moment');
const mongoose = require('mongoose');
require('colors')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


mongoose.connect('mongodb://127.0.0.1:27017', (err) => {
	if(err){
		console.log(`${client.user.username}`.blue + `[Database]`.red + `: Connected to the database at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
	}
	console.log('Connected')
})

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`[${client.user.username}] `.blue + `[LogIn]`.cyan + `:Logged in to ${client.user.tag} at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token)
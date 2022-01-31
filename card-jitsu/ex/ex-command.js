const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
	    .setName('') //set the name of the command
	    .setDescription('') // set the description of the command
        .addUserOption(option => // example of a option
            option.setName('')
            .setDescription('')
            .setRequired(true)
        ),

	async execute(interaction, ) { // execute
        
	},
    
}
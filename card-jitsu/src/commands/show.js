const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const axios = require('axios').default;

//TODO:Listen For each option in the command
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('show')
	    .setDescription('show')
        .addStringOption(option =>
            option.setName('property') 
                .setDescription('show the property')
                .setRequired(true)
                .addChoice('Hand', 'hand')
                .addChoice('Bank', 'bank')
                .addChoice('Opponents Bank', 'op_bank')
        ),

	async execute(interaction) {
		const option = interaction.options.getString('property')
        
        if(option === 'hand') {


            axios.get('http://localhost:3001/hand')
                .then((response) => {
                    const handEmbed = new MessageEmbed()
                        .setTitle(`Your hand`)
                        .setColor('BLUE')
                        .addFields(
                            {name: `${response.data[0].Type}`, value: `${response.data[0].Score}`, inline: true},
                            {name: `${response.data[1].Type}`, value: `${response.data[1].Score}`, inline: true},    
                            {name: `${response.data[2].Type}`, value: `${response.data[2].Score}`, inline: true},
                        )


                    interaction.reply({content: null, embeds: [handEmbed], ephemeral: false})
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })


            
        } else if(option === 'bank') {
            interaction.reply('Your Bank Has')
        } else if(option === 'op_bank') {
            interaction.reply('The Opponents Bank Has')
        } else {
            interaction.reply(`cannot find the arguments for the option ${option}`)
        }
	},
};
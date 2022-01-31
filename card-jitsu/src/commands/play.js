const { SlashCommandBuilder } = require('@discordjs/builders');
const { Init } = require('../logics/cardLogic')
const { MessageEmbed } = require('discord.js')
const axios = require('axios').default;
const Game = require('../logics/CardGame')
const Player = require('../logics/playerClass')
require('colors')
const moment = require('moment')
const path = require('path')


let Round;

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('play')
	    .setDescription('init')
        .addUserOption(option => 
            option.setName('enemy')
            .setDescription('Enemy')
            .setRequired(true)
        ),

	async execute(interaction) {
        const p1 = interaction.user
        const p2 = interaction.options.getUser('enemy')

        if(p1.id === p2.id ) {
            interaction.reply('cannot fight Yourself dumbo')
            return false;
        } else if (p2.bot === true) {
            interaction.reply(`${p2} is a bot u dumb head`)
            return false;
        } else if (p1.bot === true) {
            return false;
        } 


        const p1obj = new Player(p1)
        const p2obj = new Player(p2)
        
        Round = new Game(p1obj, p2obj)

        Round.InitRound()
            .then(() => {
                const RoundEmbed = new MessageEmbed()
                    .setTitle('New Round')
                    .setThumbnail('https://cdn.discordapp.com/attachments/693517202879414312/860599179578966056/Fight_icon.png')
                    .setDescription(`Initialized a Round with ${p2}`)
                    .addFields(
                        {name: 'RoundId', value: `${Round.RoundId}`, inline: true},
                        {name: 'enemy', value: `${p2}`, inline: true},
                    )
                    .setTimestamp()
                    .setColor('YELLOW')

                interaction.reply({content: null, embeds: [RoundEmbed]})
            })
            .catch(err => {
                console.error(`[play.js]`.blue + `[Error]`.red + `: at ${moment().format('MMMM Do YYYY, h:mm:ss a')} an error happened in command play.js\n${err}`)
            })
	},
    
}   
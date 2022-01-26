const { SlashCommandBuilder } = require('@discordjs/builders');
const { Init } = require('../logics/cardLogic')
const { MessageEmbed } = require('discord.js')
const axios = require('axios').default;
const Game = require('../logics/CardGame')
const Player = require('../logics/playerClass')

//TODO:Listen For each option in the command

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('debug')
	    .setDescription('init')
        .addUserOption(option => 
            option.setName('player1')
            .setDescription('player1')
            .setRequired(true)
        )
        .addUserOption(option => 
            option.setName('player2')
            .setDescription('player2')
            .setRequired(true)
        ),

	async execute(interaction) {
        const p1 =  interaction.options.getUser('player1')
        const p2 = interaction.options.getUser('player2')

        const p1obj = new Player(p1)
        const p2obj = new Player(p2)
        
        const Round = new Game(p1obj, p2obj)

        console.log(Round.RoundInit)

        interaction.reply('it worked')
	},
}
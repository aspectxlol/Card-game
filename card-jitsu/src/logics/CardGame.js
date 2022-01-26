const moment = require('moment')

const { v4: id } = require('uuid');

class Game {
    constructor(Player1, Player2) {

        this.username1 = Player1.Username()
        this.id1 = Player1.UserId()
        this.GameId1 = Player1.GameId

        this.username2 = Player2.Username()
        this.id2 = Player2.UserId()
        this.GameId2 = Player2.GameId
        
        this.RoundInit = false
        this.RoundId
        this.RoundTime 
    }  
    

    InitRound() {
        this.RoundInit = true
        this.RoundTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        this.RoundId = id()

        return 'Successfully initialize a round'
    }

    endRound() {
        this.RoundInit = false
        this.RoundTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    }
}

module.exports = Game;
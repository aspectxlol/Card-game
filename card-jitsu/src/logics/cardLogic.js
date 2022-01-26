const { Player } = require('../logics/playerClass')

let hasInit = false;
let players = {
    player1: null,
    player2: null
};
module.exports = {
    Init: function(Player1, Player2) {
        if (hasInit = true) return;
        hasInit = true;

        p1 = {
            username: 'john',
            id: '1908197598173051850175'
        }

        p2 = {
            username: 'david',
            id: '1839179815619805711513'
        }

        players.player1 = new Player(p1)
        players.player2 = new Player(p2)

        return players
    },

}


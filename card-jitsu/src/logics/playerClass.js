const { v4: id } = require('uuid');

class Player {
    
    constructor(player) {
        this.username = player.username;
        this.userId = player.id;
        this.GameId = id() 
    }

    Username() {
        return this.username; 
    }

    UserId() {
        return this.userId;
    }

    GameId() {
        return this.GameId;
    }
}

module.exports = Player;
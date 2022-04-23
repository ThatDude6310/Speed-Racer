class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0
    this.score = 0
    this.fuel = 185
    this.life = 185
  }

    getPlayerRank(){
      database.ref("playerRank").on("value",data=>{
        this.rank = data.val()
        console.log(this.rank)
      })
    }

    static updatePlayerRank(rank){
      database.ref("/").update({
        playerRank : rank 
      })
    }

    getCount(){
      database.ref("playerCount").on("value",function(data){
        playerCount = data.val()
      })
    }

    updateCount(players){
      database.ref("/").update({
        playerCount: players 
      })
    }

    addPlayer(){
      var playerIndex= "players/player"+this.index 
      if (this.index===1) {
        this.positionX= width/2-100
      } else {
        this.positionX=width/2+100
      }
      database.ref(playerIndex).set({
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        rank : this.rank,
        score:this.score

      })
    }

    static getPlayerInfo(){
      database.ref("players").on("value",data=>{
        allPlayers = data.val()
      })
    }

    update(){
      
      var playerIndex = "players/player"+this.index
      database.ref(playerIndex).update({
        positionX: this.positionX ,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score,
        life: this.life 
      })

      
    }

    getDistance(){
      var playerDist = "players/player"+this.index
      database.ref(playerDist).on("value",data=>{
        var data = data.val()
        this.positionX = data.positionX
        this.positionY = data.positionY
      })
      
    }
  
}

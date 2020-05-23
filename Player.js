class Player {
    constructor(){
    
    }
    
    getCount (){
        var countRef = database.ref( ' playerCount' );
        countRef . on ("value" , function(data) {
         playerCount = data.val();
    } )
    }
    
    updateCount ( count ) {
        database.ref('/').update( {
            playerCount : count 
        } );
    }

    
    update ( userName ) {
        var playerIndex = "player" + playerCount ;
       
        database . ref ( playerIndex ) . update( {
            name : userName
            
        } );
    }

    
}




  const counterModule = (function() {
    let popup = document.getElementById('add-player-popup');
    
    const Gameboard = {
        board: [
          ['', '', ''], // line 1 
          ['', '', ''], // line 2
          ['', '', '']  // line 3
        ]
      };
      const conditions = {

      };
      const Game = {
        renderBoard: function() {
          let topLeft = document.getElementById('one-one');
          let topMiddle = document.getElementById('one-two');
          let topRight = document.getElementById('one-three');
          let middleLeft = document.getElementById('two-one');
          let middleMiddle = document.getElementById('two-two');
          let middleRight = document.getElementById('two-three');
          let bottomLeft = document.getElementById('three-one');
          let bottomMiddle = document.getElementById('three-two');
          let bottomRight = document.getElementById('three-three');
            // render the board based on the above board in the GameBoard object
        
          
        
          }
      }

      return {Game,Gameboard}

  })();

//counterModule.Game.renderBoard()




let topLeft = document.getElementById('oneone');


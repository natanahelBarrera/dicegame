


var scores, roundScore, activePlayer,gameplaying;
 init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    //random rumber 
    if(gameplaying){
var dice= Math.floor(Math.random()*6)+ 1;

// display the result
var diceDom = document.querySelector('.dice');
diceDom.style.display='block';
diceDom.src= 'dice-'+ dice + '.png';

if (dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}else {
    nextPlayer();
}
    }
});



     document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gameplaying){ 
        scores[activePlayer] += roundScore;

         //update IU
         document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

         //check if player won the game 
         if (scores[activePlayer]>=100){
             document.querySelector('#name-'+ activePlayer).textContent='winner!';
             document.querySelector('.dice').style.display = 'none';
             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
             gameplaying=false;
         }else{
        // next player
         nextPlayer();

         }

     }
     
    });


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.pleyer-0-panel').classList.remove('active');
    //document.querySelector('.pleyer-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init );

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    
    
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
   
    
    
}

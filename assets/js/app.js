const playerList = document.getElementById('selected-player-list');
let selectedPlayerCount = 0;


function playerSelect(element){

    selectedPlayerCount++; 
    if(selectedPlayerCount > 5){
        window.location.href = '#selectWarning';
        return;
    }

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const li = document.createElement('li');
    li.innerText = playerName;
    playerList.appendChild(li);
    
    element.setAttribute('disabled','disabled');

    



    console.log(selectedPlayerCount);
}
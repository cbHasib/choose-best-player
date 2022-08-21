function playerSelect(element) {
    const playerList = document.getElementById("selected-player-list");
  
    const numberOfPlayer = numberOfSelectedPlayer();
    if (numberOfPlayer >= 5) {
      window.location.href = "#selectWarning";
      return;
    }
  
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = playerName;
    playerList.appendChild(li);
  
    element.setAttribute("disabled", "disabled");
  }
  
  
  function numberOfSelectedPlayer(){
      const playerList = document.getElementById("selected-player-list");
      const playerNumber = playerList.children.length;
      return playerNumber
  }


  function getInputValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    return elementValue;
  }


  function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value.toFixed(2);
  }


  function getElementValue(elementId, value){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
  }
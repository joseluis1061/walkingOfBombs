const canvas = document.querySelector("#game");
const gameContext = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame(){
  //Darle el tamaño del canva de acuerso al tamaño de la pantalla
  let canvasSize;
  if(window.innerHeight > window.innerWidth){
    canvasSize = window.innerWidth * 0.8;
  }else{
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  // Darle tamaños a un elemnto dividiendo el canva a 10*10
  // Cada elemento debe ocupar una celda completa
  elementSize = (canvasSize / 10) - 1;
  gameContext.font = elementSize+ "px Verdana"; // Debes darle una fuente
  //gameContext.textAlign = "end"; // Cambia el punto cero de los elementos a la izquierda
  for(let i=0; i < 10; i++){
    gameContext.fillText(emojis['X'], elementSize*i, elementSize);
  }

}


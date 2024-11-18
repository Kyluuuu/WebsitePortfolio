import "../godotPage/godotGamecss.css"

const iframe = document.createElement('iframe');
iframe.src = "../../UltimateTickTackToeGodotGame/TickTackToe.html";
iframe.width = window.innerWidth * 0.8;
iframe.height =  window.innerHeight * 0.8;

let newDiv = document.createElement("div");
newDiv.classList.add("GodotGameClass");
document.body.appendChild(newDiv).appendChild(iframe)


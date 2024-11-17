import 'godotGamecss.css'

let hasLoaded = false

function loadGame() {
    if (!hasLoaded) {
        const iframe = document.createElement('iframe');
        iframe.src = 'UltimateTickTackToeGodotGame/TickTackToe.html';
        iframe.width = window.innerWidth * 0.8;
        iframe.height =  window.innerHeight * 0.8;
        
        let newDiv = document.createElement("div");
        newDiv.classList.add("GodotGameClass");
        // Append the iframe to the DOM (e.g., inside a container)
        //document.body.appendChild(newDiv).append(iframe)
        document.body.appendChild(newDiv).appendChild(iframe)
        hasLoaded = true
    }
}

// // // Call the function to load the game (e.g., on a button click)
let godotButton = document.getElementById("playButtonGodot")
if (godotButton) {
    godotButton.addEventListener('click', loadGame);
}
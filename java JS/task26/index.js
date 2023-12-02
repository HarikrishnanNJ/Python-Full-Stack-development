let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")


fightButton.addEventListener("click", function() {    
    let first = Math.floor( Math.random() * fighters.length )
    let second = Math.floor( Math.random() * fighters.length )   
    stageEl.innerText = `${fighters[first]} VS ${fighters[second]}`

    
    document.getElementById("stage").style.color="rgb(255, 188, 4)"
    document.getElementById("stage").style.fontSize="30px"
    document.getElementById("stage").style.fontFamily="Permanent Marker"
})
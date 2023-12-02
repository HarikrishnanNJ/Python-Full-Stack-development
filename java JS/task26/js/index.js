
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    // var item = items[Math.floor(Math.random()*items.length)];
    var fighter1= fighters[Math.floor(Math.random()*fighters.length)]
    var fighter2= fighters[Math.floor(Math.random()*fighters.length)]
    stageEl.innerText=`${fighter1} vs ${fighter2}`
})

var fighter1= fighters[Math.floor(Math.random()*fighters.length)]
    var fighter2= fighters[Math.floor(Math.random()*fighters.length)]
    stageEl.innerText=`${fighter1} vs ${fighter2}`
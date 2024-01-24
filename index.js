

let homeScore = document.getElementById("scoreHome")
console.log(homeScore)

let guestScore = document.getElementById("scoreGuest")
console.log(guestScore)

let countH = 0
let countG = 0

// HOME SCORE 
function plusOneH(){
    countH = countH +1
    homeScore.textContent = countH
}

function plusTwoH(){
    countH = countH + 2
    homeScore.textContent = countH
}

function plusThreeH(){
    countH = countH + 3
    homeScore.textContent = countH
}

// GUEST SCORE 
function plusOneG(){
    countG = countG +1
    guestScore.textContent = countG
}

function plusTwoG(){
    countG = countG + 2
    guestScore.textContent = countG
}

function plusThreeG(){
    countG = countG + 3
    guestScore.textContent = countG
}

function newGame(){
    countH = 0
    countG= 0
    homeScore.textContent = countH
    guestScore.textContent = countG
}





// let scoreHome = document.getElementById("scoreHome")
// console.log(scoreHome)

// let scoreGuest = document.getElementById("scoreGuest")
// console.log(scoreGuest)

// let countH = 0
// let countG= 0

// // HOME
// function plusOneH(){
//     countH = countH +1
//     scoreHome.textContent= countH
//     console.log(countH)
// }

// function plusTwoH(){
//     countH = countH +2
//     scoreHome.textContent= countH
//     console.log(countH)
// }

// function plusThreeH(){
//     countH = countH + 3
//     scoreHome.textContent= countH
//     console.log(countH)
// }
// // GUEST

// function plusOneG(){
//     countG = countG +1
//     scoreGuest.textContent= countG
//     console.log(countG)
// }

// function plusTwoG(){
//     countG = countG +2
//     scoreGuest.textContent= countG
//     console.log(countG)
// }

// function plusThreeG(){
//     countG = countG +3
//     scoreGuest.textContent= countG
//     console.log(countG)
// }
let min = 2;
let max = 11;
isAlive = true
hasBlackJack = false
let message = "";
let myArr = []
messageEl = document.getElementById("yes")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")


let player = {
   "name": "Chuks",
   "money": 150
}

playerEl.textContent = player.name + ": $" + player.money


function firstCard() {
   return Math.floor(Math.random() * (max-min + 1) + min)
}
data = firstCard()
console.log(data)
myArr.push(data)

function secondCard() {
   return Math.floor(Math.random() * (max-min + 1) + min)
}
let data1 = secondCard()
console.log(data1)
myArr.push(data1)

function add() {
    return (data + data1)
}
let sum = add()


function startGame() {
    let ok = renderGame()
    return ok
}

function newCard() {
      if (isAlive === true && hasBlackJack === false) {
         let cardy =  Math.floor(Math.random() * (max-min + 1) + min)
         sum = sum + cardy
         myArr.push(cardy)
         console.log(myArr)
         sumEl.textContent = "Sum:" + sum
         let us = renderGame()
         return us
     }
}


function renderGame() {
     cardEl.textContent = "Cards:"
     for (let i = 0; i < myArr.length; i++) {
          cardEl.textContent += myArr[i] + " "
     }

    if (sum < 21) {
        message = "You are almost there!"
    }
    else if (sum === 21) {
        message = "You have Blackjack!"
        hasBlackJack = true
    }
    else {
       message = "You lost your money!"
       isAlive = false
    }
    messageEl.textContent = message

}







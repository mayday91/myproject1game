const cards = [
      {
          name: 'bowser',
          img: 'bowsertilenobg.png'
      },
      {
          name: 'diddykong',
          img: 'diddykongtilenobg.png'
      },
      {
          name: 'donkeykong',
          img: 'donkeykongtilenobg.png'
      },
      {
          name: 'luigi',
          img: 'luigitilenobg.png'
      },
      {
          name: 'mario',
          img: 'mariotilenobg.png'
      },
      {
          name: 'peach',
          img: 'peachtilenobg.png'
      },
      {
          name: 'yoshi',
          img: 'yoshitilenobg.png'
      },
      {
          name: 'wario',
          img: 'wariotilenobg.png'
      },
      {
          name: 'bowser',
          img: 'bowsertilenobg.png'
      },
      {
          name: 'diddykong',
          img: 'diddykongtilenobg.png'
      },
      {
          name: 'donkeykong',
          img: 'donkeykongtilenobg.png'
      },
      {
          name: 'luigi',
          img: 'luigitilenobg.png'
      },
      {
          name: 'mario',
          img: 'mariotilenobg.png'
      },
      {
          name: 'peach',
          img: 'peachtilenobg.png'
      },
      {
          name: 'yoshi',
          img: 'yoshitilenobg.png'
      },
      {
          name: 'wario',
          img: 'wariotilenobg.png'
      }
  ]
  
  function shuffle() {
        cards.sort(() => 0.5 - Math.random())
  }

    const game = document.querySelector('.game')
    const resultDisplay = document.querySelector('#result')
    const failedTries = document.querySelector(".failedTries")
    const reset = document.querySelector('.reset-button')
    let cardPicked = []
    let cardsChosenId = []
    let cardsWon = []
    let clicks = 0

document.addEventListener('DOMContentLoaded', () => {
    createGame(game, cards)
    shuffle()
    reset.addEventListener('click', playAgain)
})



    function createGame() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'mariocoinnobg.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        game.appendChild(card)
      }
    }
  
    
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const cardOne = cardsChosenId[0]
      const cardTwo = cardsChosenId[1]
      
      if(cardOne === cardTwo) {
        cards[cardOne].setAttribute('src', 'mariocoinnobg.png')
        cards[cardTwo].setAttribute('src', 'mariocoinnobg.png')
        alert("You can't click the same thing twice!")
      }
      else if (cardPicked[0] === cardPicked[1]) {
        alert('You found a match')
        cards[cardOne].setAttribute('src', 'mariostarnobg.png')
        cards[cardTwo].setAttribute('src', 'mariostarnobg.png')
        cards[cardOne].removeEventListener('click', flipCard)
        cards[cardTwo].removeEventListener('click', flipCard)
        cardsWon.push(cardPicked)
      } else {
        cards[cardOne].setAttribute('src', 'mariocoinnobg.png')
        cards[cardTwo].setAttribute('src', 'mariocoinnobg.png')
        clicks += 1
        failedTries.innerHTML = clicks
        alert('Not a match. Please try again.')
      }
      cardPicked = []
      cardsChosenId = []
      

      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cards.length/2) {
        resultDisplay.textContent = '  Woo! You must have a great memory!'
      } else if (clicks > 5) {
        alert('You suck! Start Over!')
        playAgain()
      }
    }
  
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardPicked.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardPicked.length === 2) {
        setTimeout(checkForMatch, 100)
      }
    }
  
    // createGame()
 

function playAgain() {
  shuffle()
  game.innerHTML = ""
  createGame(game, cards)
  cardsWon = 0
  clicks = 0
  failedTries.innerHTML = 0
  resultDisplay.innerHTML = 0
}














// function on() {
//     document.getElementById('overlay').style.display = "none"
//     document.getElementById('winBox').style.display ='none'
// }

// function off() {

// }

// function playerWon() {
//     document.getElementById('whoWon').innerHTML = 'You Won!'
// }

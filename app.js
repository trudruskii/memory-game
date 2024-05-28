document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardPicks = []
    let cardPicksId = []
    let cardsWon = []
    //create game board

function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardPicksId[0]
        const optionTwoId = cardPicksId[1]

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            alert('You just picked the same image mate! Give it another go!')
        }
        else if (pickedCards[0] === pickedCards[1]) {
            alert('Well done, mate! You found a match. Keep going!')
            cards [optionOneId].setAttribute('src', 'images/blank.png')
            cards [optionTwoId].setAttribute('src', 'images/blank.png')
            cards [optionOneId].removeEventListener('click', flipCard)
            cards [optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(pickedCards)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Oops.. Sorry mate, you picked the wrong card! Have another go, will ya?')
        }
        pickedCards = []
        pickedCardsId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'OUTSTANDING! You have a memory like an elephant! You matched all of them, mate!!!'
        }
    }


    // flip the card
function flipCard() {
        let cardId = this.getAttribute('data-id')
    pickedCard.push(cardArray[cardId].name)
    pickedCardId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (pickedCard.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}




    createBoard()









})
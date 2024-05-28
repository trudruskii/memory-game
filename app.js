

document.addEventListener('DOMContentLoaded', () => {

    // Modal elements
    const modal = document.getElementById('gameModal');
    const startGameBtn = document.getElementById('startGameBtn');

    // Show the modal when the page loads
    modal.style.display = 'block';

    // Hide the modal and start the game when the button is clicked
    startGameBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        startGame();
    });

    // Start the game function
    function startGame() {
        // List all card options
        const cardArray = [
            { name: 'fries', img: 'images/fries.png' },
            { name: 'cheeseburger', img: 'images/cheeseburger.png' },
            { name: 'ice-cream', img: 'images/ice-cream.png' },
            { name: 'pizza', img: 'images/pizza.png' },
            { name: 'milkshake', img: 'images/milkshake.png' },
            { name: 'hotdog', img: 'images/hotdog.png' },
            { name: 'fries', img: 'images/fries.png' },
            { name: 'cheeseburger', img: 'images/cheeseburger.png' },
            { name: 'ice-cream', img: 'images/ice-cream.png' },
            { name: 'pizza', img: 'images/pizza.png' },
            { name: 'milkshake', img: 'images/milkshake.png' },
            { name: 'hotdog', img: 'images/hotdog.png' }
        ];

        cardArray.sort(() => 0.5 - Math.random());

        const grid = document.querySelector('.grid');
        const resultDisplay = document.querySelector('#result');
        let pickedCards = [];
        let pickedCardsId = [];
        let cardsWon = [];

        // Create your board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', 'images/blank.png');
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            }
        }

        // Check for matches
        function checkForMatch() {
            const cards = document.querySelectorAll('img');
            const optionOneId = pickedCardsId[0];
            const optionTwoId = pickedCardsId[1];

            if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute('src', 'images/blank.png');
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
                alert('You just picked the same image mate! Give it another go!');
            } else if (pickedCards[0] === pickedCards[1]) {
                alert('Well done, mate! You found a match. Keep going!');
                cards[optionOneId].setAttribute('src', 'images/white.png');
                cards[optionTwoId].setAttribute('src', 'images/white.png');
                cards[optionOneId].removeEventListener('click', flipCard);
                cards[optionTwoId].removeEventListener('click', flipCard);
                cardsWon.push(pickedCards);
            } else {
                cards[optionOneId].setAttribute('src', 'images/blank.png');
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
                alert('Oops.. Sorry mate, you picked the wrong card! Have another go, will ya?');
            }
            pickedCards = [];
            pickedCardsId = [];
            resultDisplay.textContent = cardsWon.length;
            if (cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = 'OUTSTANDING! You have a memory like an elephant! You matched all of them, mate!!!';

                // Create a new element to display the message
                const newElement = document.createElement('div');
                newElement.textContent = 'Thanks for checking out this game project. I followed along to get the initial logic done but then added the start modal, the styles/theme, personalized the alerts|function syntax and appended this message. Thanks for playing!';
                newElement.style.color = '#5531ff';
                newElement.style.fontSize = '20px';
                newElement.style.textAlign = 'center';
                newElement.style.marginBottom = '20rem';
                newElement.style.position = 'fixed';
                newElement.style.bottom = '0';
                newElement.style.width = '100%';
                newElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                newElement.style.padding = '10px 0';

                // Append the new element to the body
                document.body.appendChild(newElement);
            }
        }

        // Flip your card
        function flipCard() {
            let cardId = this.getAttribute('data-id');
            pickedCards.push(cardArray[cardId].name);
            pickedCardsId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (pickedCards.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }

        createBoard();
    }
});

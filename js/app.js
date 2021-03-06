/*
 * Create a list that holds all of your cards*/
 const allCards = ['fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb',
                  'fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb'];
let openCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
document.addEventListener('DOMContentLoaded', DisplayCards);

function DisplayCards () {
  shuffle(allCards);
  allCards.forEach(function(currentCard){
   const card = document.createElement('li');
      card.className = 'card';
   const cardType = document.createElement('i');
     cardType.className = currentCard;
     card.appendChild(cardType);
   const deck = document.querySelector('.deck');
     deck.insertAdjacentElement('beforeend', card);
    });
};
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function cardClicked (event) {

  if (event.target.className == 'card') {
    displayCardSymbol(event.target);
    addCardOpenList(event.target);
    }
  if (openCards.length==2) {
     const SymbolOne = openCards[0].firstElementChild.className;
     const SymbolTwo = openCards[1].firstElementChild.className;;
    if(SymbolOne==SymbolTwo){
      leaveOpen(openCards);
    }
    else {
      setTimeout( function() {
            leaveClose(openCards);
            openCards = [];
          }
        , 1000);
         }

  }
  }

function displayCardSymbol (targetCard){
targetCard.className = 'card open show';
 }

function addCardOpenList (targetCard){

  openCards.push(targetCard);
  // console.log(openCards);
  // console.log(openCards[0].className);
  //  if (openCards.length==2) {
  //    if(openCards[0].className==openCards[1].className){
  //      leaveOpen(openCards);
  //    }
  //    else {
  //      CloseCards(openCards);
  //         }
  //
  //       openCards = [];
  //  }

}

function leaveOpen (openCards) {
 openCards[0].className= 'card match';
 openCards[1].className= 'card match';
}

function leaveClose (openCards) {
 openCards[0].className= 'card';
 openCards[1].className= 'card';
}

document.addEventListener("click", cardClicked);


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

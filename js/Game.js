/************************
 * Game.js - class 
 ***********************/

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase("Hey you guys"),
            new Phrase("To infinity and beyond"), 
            new Phrase("Milk was a bad choice"), 
            new Phrase("I feel the need the need for speed"), 
            new Phrase("Houston we have a problem")]
        this.activePhrase = null;
        // Additional Properties
        this.over = false;
    }

    /*******
     * Game class Methods
     ******/

    /**
     * startGame method
     * Description: 1) Removes start overlay 2) Creates new Phrase and updates properties 3) Sets up the webpage
     * 
     * @param {*} btn - Button pressed from the event listener 
     * @returns - Updates properties and prepares page
     */
    startGame(btn) {
        const overlay = btn.parentNode;
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * getRandomPhrase Method
     * Description: Creates a random number and returns phrase from array
     * 
     * @returns - Phrase to store in property
     */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);    // Because we want 0 index number\
        return this.phrases[randomNumber]; 
    }

    /**
     * handleInteraction Method
     * Description: Manages the interaction within game play. Focuses on:
     *              1. Disabled pressed keys
     *              2. Checks to see if the event letter matches a letter in the phrase
     *                  a) If yes, checks to see if the game is won
     *                  b) If no, calls removeLife method
     *              3. Calls gameOver and removeLife methods, and updates DOM classes depending on events 
     * 
     * @param {event} el - Event letter from the listener  
     * @returns - Runs through plays, and ends game if necessary
     */

    
    handleInteraction(el) {
        const chosenLetterElement = el; 
        if (chosenLetterElement.disabled === false) {
            chosenLetterElement.disabled = true;                 
            const letter = el.textContent;
            if (this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);
                chosenLetterElement.classList.add("chosen");
                const win = this.checkForWin();
                if (win) {
                    this.gameOver(win);
                }
            } else {
                chosenLetterElement.classList.add("wrong");
                this.removeLife();
            } 
        } 
         
        
    }

    /**
     * removeLife Method
     * Description: Updates heart image and missed property each time it is called
     * 
     * @returns updated properties
     */
    removeLife() {
        const scoreBoardLi = document.querySelectorAll("#scoreboard li");
        // To ensure that more than 5 hearts aren't updated
        if (this.missed < 5) {
            const img = scoreBoardLi[this.missed].firstElementChild;
            img.src = "images/lostHeart.png";
            this.missed++;
        }
        // Call game over if missed attempts reaches 5
        if (this.missed > 4) {
            this.gameOver(false);
        }
        
    }

    /**
     * checkForWin Method
     * Description: Checks to see if the game has been won. Focuses on:
     *              1. Collecting all the guessed letters in an array
     *              2. Array is joined, to create a string
     *              3. String is compared to the activePhrase property to determine outcome
     * 
     * @returns {boolean} - won = true / lost = false
     */
    checkForWin() {
        const ul = document.querySelector("#phrase ul");
        const li = ul.children;
        const liArray = [];
        for (let i = 0; i < li.length; i++) {
            if(li[i].className.includes("show") || li[i].className.includes("space")) {
                liArray.push(li[i].textContent);
            }
        }

        const guessed = liArray.join("");
        if (guessed === this.activePhrase.phrase) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * gameOver Method
     * Description: Depending on win or lose, updates the game overlay
     * 
     * @returns - overlay style and updated message
     */
    gameOver(win) {
        this.over = true;               // Allows preventDefault on the keyup eventlisteners
        const h1 = overlay.firstElementChild.nextElementSibling;
        if (win) {
            overlay.classList.add("win");
            overlay.classList.remove("lose");
            h1.textContent = "Congratulations, you know your movies!";
        } else {
            overlay.classList.add("lose");
            overlay.classList.remove("win");
            h1.textContent = `Unlucky, the phrase was "${this.activePhrase.full}"`;   // Full returns the uppercase on lose to demo the answer
        }
        overlay.style.display = "flex";
        this.resetGame()
    }


    /**
     * resetGame Method
     * Description: Resets the game by resetting:
     *              1. DOM (removing phrase list items)
     *              2. Re-enables buttons
     *              3. Restores lives images
     * 
     * @returns - reset game
     */
    resetGame() {
        const ul = document.querySelector("#phrase ul");
        ul.innerHTML = "";          // RESETS UL BOARD
        const keys = document.querySelectorAll("#qwerty button");
        for (let i =0; i < keys.length; i++) {
            keys[i].className = "key";
            keys[i].disabled = false;
        }
        const lives = document.querySelectorAll("#scoreboard img");
        lives.forEach(life => life.src="images/liveHeart.png");
    }
}
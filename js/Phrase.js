/************************
 * app.js - Controls the start of the game and event listeners
 ***********************/

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        // Additional Properties
        this.letters = this.phrase.split("");                           
        this.full = phrase;  // added to allow orginal caps on lose screen
    }
    
    /*******
     * Phrase class Methods
     ******/
    
    /**
     * addPhraseToDisplay Method
     * Description: Updates the DOM to display the hidden phrase. Focusing on:
     *              1. Creating new list item
     *              2. Creating letter or space list item
     *              3. Appending to the DOM
     * 
     * @returns - rendered UL List with new phrase
     */
    addPhraseToDisplay() {
        const phraseUL = document.querySelector("#phrase ul");
        this.letters.forEach(letter => {
            const li = document.createElement("li");
            if (letter === " ") {
                li.className = "space";
                li.textContent = " ";
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = `${letter}`;
            }
            phraseUL.appendChild(li);
        })
    }

    /**
     * checkLetter Method
     * Description: Checks to see if letter is in the phrase in play
     * 
     * @param {string} letter - One letter created from event object text content
     * @returns {boolean} - Letter in phrase = true / Letter not in phrase = false 
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * showMatchedLetter Method
     * Description: Updates List Items to reveal letter
     * 
     * @param {string} letter - Letter to check
     * @returns - Updates game board letter
     */
    showMatchedLetter(letter) {
        const ul = document.querySelector("#phrase ul");
        const li = ul.children;
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent === letter) {
                li[i].classList.remove("hide");
                li[i].classList.add("show");
                }
        }
    }

}

    

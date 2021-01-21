/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Create a phrase class with a constructor that recieves a parameter and initializes the following properties
class Phrase {
    // phrase - THE ACTUAL PHRASE - set the the phrase parameter but set to lower case
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split("");
    }
    // Methods: 
    
    /**
     * addPhraseToDisplay
     * Description: 1. Locates UL and creates LI element
     *              2. Splits the phrase up into individual array
     *              3. Runs through array to check if its a letter or space - adds appropriate class
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
        console.log(phraseUL);
    }

    // 2. checkletter - checks to see if letter selected by the player matches letter in phrase

    // NEED TO RETHINK SOME LOGIC
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }


    // 3. showMatchedLetter - reveals letter on the board that matches selection
        // To reveal, select all DOM elements that have css class name that matches selected letter
        // hide and show the correct class name
    showMatchedLetter(l) {
        const ul = document.querySelector("#phrase ul");
        const li = ul.children;
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent.includes(l)) {
                li[i].classList.remove("hide");
                li[i].classList.add("show");
                }
        }
    }

}

    

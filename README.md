# td4-oop-game
Movie Phrase Game (formerly Phrase Hunter Game from Treehouse Tech Degree) asks users to click on letters or press their keyboard to guess a famous movie phrase. They can make up to 5 mistakes before they win or lose the game. Once the game has finished, the user can simply click on the new game button to start again.

# Motivation 

This project was designed in line with project 4 of the Treehouse TechDegree and as a part of my developer portfolio

# Build Status

This piece is completed, meeting the exceeds standards of the Treehouse techdegree.

# Code Style

JavaScript

# Features 

This game will require the user to click on a letter or press on their keyboard to play the game. If they user guesses the phrase, then a winner message will be displayed. Alternatively if they lose the game, a user message will be displayed with the answer to the phrase they didn't know.

This game also is targeted at achieving the "exceeds" status from Treehouse Techdegree, therefore it:
1. Has an added event listener on the "keyup" event. A preventDefault has been paired with this listener so that if the game.over property is TRUE, the keyboard clicks wont happen. This was added because after the game was completed, any additional typing on the keyboard created a console error.

2. App styles have been personalized to HTML and CSS. These are my changes (movie theatre themed):
### HTML
1. Title - Movie Quote Hunter
2. keyboard-area div was created, with the additional of div child divs "keyboard-images", which hold images of popcorn
3. Inside the "qwerty" div, the "scoreboard" div was added as a child. This was the styled to make a movie screen looking effect 
4. A footer was added with the image "seats.jpg" to add to the effect of movie theatre. This was intended to be a background image, but I continuously got an error so it is in the HTML

### CSS
1. body tag - margin: 0 and red background color added
2. header class - color changed
3. keyboard-area styled to with flex and designed to look like a cinema screen
4. qwerty id styled to help with the cinema screen effect
5. Footer styled, with image stretched to 100%
6. Added Media quieries to remove added displays if on a smaller screen

6. Opening curtain effect on page load (only). This is designed from looking at varieties of the same effect online. However, the HTML and CSS structure and advice came from Tom Hughes (https://speckyboy.com/curtain-effect-web-design/)


# Contribution

If you have any suggestions to improve this form, please reach out to me on github

Next steps for this app are to add two player functionality where 1 player will add a phrase and the other play will try to guess. Then swapped.

# Credits 
Curriculum at teamtreehouse.com
w3schools.com
popcorn image from: pngfind.com (via Google)
seats image from: vulture.com (via Google)
Tom hughes - Hover Curtain Effect (https://speckyboy.com/curtain-effect-web-design/)
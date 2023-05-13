

# Documentation
This is a single player version of the game MAFIA, by yours truely Abukar Djama. <br>
Click [HERE](https://main--keen-raindrop-d78e24.netlify.app/) to launch the game.

## General Overview of Structure

## Graph Diagram 
![Graph](/public/graph.png)
All the files below can be found in the src folder. <br>
All files have been commented for convinience. <br>

1. myTools.js
    * This is where I have created the story line for the game ( as a class )
    * The plot is constructed dynamically at the beginning before the game has started
2. MyHeader
    * Is a custom JSX component so I can animate the word MAFIA.
3. Introduction
    * Is used to explain the game and how to play it.
    * Will be displayed after the header.
4. GameSection
    * This is where the game will occur.
    * All events that effect the state of the game will be handled here.
    * At the end of the game the state of the game will be decided in this component.
        * \( whether the player lost or won the game \).
5. Narrator
    * This is where the current stage of the game will be displayed to the user.
    * They will be asked to choose:
        * who to save
        * who to accuse
6. App
    * This is where all the logic is contained.
    * Contains all the components Above


# Game logic
* The player will ckick ➡ button to start the game.
* At each stage of the game there are 3 states to consider.
    * If the player is picking someone to save.
    * If the player is picking someone to accuse as the mafia.
    * The 3rd state is when the game is narrating the current stage of the game.
* When the user is picking someone to save.
    * All user options are rendered on screen.
    * A callback is attached to each option using a `onClick` event.
        * when the choice is made it is checked to see if it is correct.
            * if so the user is saved.
* Once the user has chosen someone to save, they will then choose someone to accuse as the mafia.
    * If they are the mafia then we record that entry.
        * Once the user has caught 2 mafia agents the game is over.
        * Alternatively the game is also over when all the civilians have been killed by the mafia.
* This loop repeats untill the game is either won or lost.

# Technological Choices
* Frontend => React.js
* Backend => None
* Hosting => Netlify

# Instillation
### Due to the beuty of the browser, there are no dependancies or instillations needed by the user.

# Lesson Learnd
* React isn't always better.
I chose React because it would let me manage state with out having to pass state to a server. </br>
Ironically I was going to have to host this anyway, so it wouldn't have made much of a difference. </br>
Furthermore I'm not new to React, but this project has taught me a lot of intricate concepts i was't aware of. </br>
Both from react and web api's such as setInterval. </br>
Looking back if I were to rewrite this in vanilla JavaScript it production would probably be a lot quicker. </br>
Unfortunately due to other summer classes and an overkill tech stack, I wasn't able to add much css to the page.

* Game state </br>
Regarding game state this project has taught me why a tree structure is best for games. </br>
In planning my game, I noticed I must watch out for unintended infinite loops from bad plot design. </br>

# Thanks For Stopping By 😎

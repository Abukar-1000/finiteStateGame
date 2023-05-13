

# Documentation
This is a single player version of the game MAFIA, by yours truely Abukar Djama. <br>
Click [HERE](https://main--keen-raindrop-d78e24.netlify.app/) to launch the game.

## Graph Diagram 
![Graph](/public/graph.png)

## General Overview of Structure
All the files below can be found in the src folder. <br>
All files have been commented such that there are no confusions. <br>

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


# Game logic
* The player will ckick ➡ button to start the game.
* At each stage of the game there are 2 states to consider.
    * If the player is picking someone to save.
    * If the player is picking someone to accuse as the mafia.
* When the user is picking someone to save
    * All user options are rendered on screen.
    * A callback is attached to each option on a `onClick` event
        * when the choice is made

### `npm start`

Runs the app in the production mode.

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# finiteStateGame

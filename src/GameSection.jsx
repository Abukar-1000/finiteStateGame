import { useState } from "react";
import Narrator from "./Narrator";
/*

*/

// game starts here
function GameSection(props) {

    const GAMESTATES = {
        "saveVictim": 0,
        "accuseMafia": 1,
        "Narrate": 2
    };

    let [eliminatedCivilians, eliminatedMafia] = props.eliminatedArr;
    let [currentState, updateState] = useState({
        stageType: GAMESTATES.saveVictim,
        previousStageType: null,
        currentStage: 1,
        userChoice: null,
        userChoseCorrectVictim: null,
        userChoseCorrectMafia: null,
        eliminatedCivilians: new Array(), 
        eliminatedMafia: new Array(),
        narration: null,
        component: null,
        ntxBtn: null
    });



    // grab the corresponding generated stage from StoryLine class
    let plotStage = props.plot.stage.filter( stageObj => {
        return currentState.currentStage === stageObj.key;
    })[0]; 
    


    // responsiable for checking if the game has been won or lost
    const checkGameOver = () => {
        // alternate the state if player was choosing victim then player will accuse the mafia else player will choose a victim
        let gameOver = false;
        // let gameOver = false;
        let component;
        // check if the game has been lost
        if (eliminatedCivilians.length === 4){
            gameOver = true;
            component = <h1>Mafia Win 😡</h1>
        } else if (eliminatedMafia.length === 2) {
            console.log(eliminatedMafia)
            gameOver = true;
            component = <h1>You Win 🥳!!</h1>
        }

        return [gameOver, component];
        
    }

    // responsiable for checking if the game has been won or lost
    const goToNext = event => {
        
    }


    //  validates a user's attempt to save the individual who will be killed by the mafia 
    const reactToUserVictimChoice = event => {
        let userSelection = event.target.innerText;
        let correctChoice = false;
        let narration;
        if (userSelection === plotStage.victim){
            correctChoice = true;
            narration = <Narrator text = {plotStage.guessVictim.correct} />;
        } else {
            if (!eliminatedCivilians.includes(userSelection)){
                eliminatedCivilians.push(userSelection);
            }
            narration = <Narrator text = {plotStage.guessVictim.wrong} />;
        }
        let nextBtn = <button onClick = {goToNext}>➡</button>;
        // record wrong answer, this character is now dead
        // then update UI state
        updateState({
            stageType: GAMESTATES.accuseMafia,
            previousStageType: GAMESTATES.saveVictim,
            currentStage: currentState.currentStage,
            userChoice: userSelection,
            userChoseCorrectVictim: correctChoice,
            userChoseCorrectMafia: currentState.userChoseCorrectMafia,
            eliminatedMafia: currentState.eliminatedMafia,
            narration: narration,
            component: currentState.component,
            nextBtn: nextBtn
        });
    }

    // grabs the character name. created a function here becuase there are 2 cases
    // player might click alibis or the character name. Therefor must adjust for both
    const formatMafiaChoice = choice => {
        let result = choice.split(" ");
        // player click alibis instead of name 
        if (result.length > 2){
            return result.slice(0,1) + " " + result[1].slice(0,result[1].length - 1);
        }
        
        return choice;
    }

    // checks if a character has been eliminated
    const eliminated = character => {
        return eliminatedCivilians.includes(character) || eliminatedMafia.includes(character);
    }

    // validates a user's attempt to indentify a mafia member
    const reactToMafiaChoice = event => {
        let userSelection = formatMafiaChoice(event.target.innerText);
        let correctChoice = false;
        let narration;
        if (userSelection === props.plot.mafiaAgent1 || userSelection === props.plot.mafiaAgent2){
            console.log(`caught: ${userSelection}`);
            if (!eliminatedMafia.includes(userSelection)){
                eliminatedMafia.push(userSelection);
            }
            correctChoice = true
            narration = <Narrator text = {plotStage.guessMafia.correct} />;
        } else {
            if (!eliminatedCivilians.includes(userSelection)){
                eliminatedCivilians.push(userSelection);
            }
            narration = <Narrator text = {`{userSelection} was not a mafia member`} />;
        }
        let nextBtn = <button>➡</button>;

        updateState({
            stageType: GAMESTATES.saveVictim,
            previousStageType: GAMESTATES.accuseMafia,
            currentStage: currentState.currentStage + 1,
            userChoice: null,
            userChoseCorrectVictim: currentState.userChoseCorrectVictim,
            userChoseCorrectMafia: currentState.userChoseCorrectMafia,
            eliminatedCivilians: currentState.eliminatedCivilians, 
            eliminatedMafia: (correctChoice)? [userSelection.eliminatedMafia, userSelection]: currentState.eliminatedMafia,
            narration: narration,
            component: currentState.component,
            nextBtn: nextBtn
        });

    }

    let [gameOver, gameOvercomponenet] = checkGameOver();
    console.log("over ",gameOver, gameOvercomponenet)
    // end the game
    if (gameOver){
        // updateState({
        //     stageType: null,
        //     previousStageType: null,
        //     currentStage: null,
        //     userChoice: null,
        //     narration: null,
        //     component: gameOvercomponenet,
        //     ntxBtn: null
        // });
        currentState.component = gameOvercomponenet;
    }
    // user is choosing a victim to save
    else if (currentState.stageType === GAMESTATES.saveVictim){
        // component = <PickVictimToSave players = {props.plot.players} victim = {plotStage.victim} stateArr = {[currentState, updateState]}/>
        let peopleChoices = props.plot.players.map(playerName => {
            // if there is atleast civilian who died then we should not render them
            if (eliminatedCivilians.length > 0){
                if (!eliminated(playerName)){
                    console.log(`civilian: ${playerName}`)
                    return <a onClick={reactToUserVictimChoice}>
                                <li><p>{playerName}</p></li>
                            </a>
                }
            } else {
                return <a onClick={reactToUserVictimChoice}>
                            <li><p>{playerName}</p></li>
                        </a>
            }
        });

        // render the people choices 
        currentState.component = <div>
                        <p>Select a victim to save:</p>
                        <ul>
                            {peopleChoices}
                        </ul>
                    </div>
        
    }
    else if (currentState.stageType === GAMESTATES.accuseMafia){
        console.log("arrs: ", eliminatedCivilians, eliminatedMafia)
        currentState.nextBtn = null;
        let mafiaChoices = plotStage.guessMafia.alibis.map( alibisObj => {
            // if the current character is not eliminated ( whether they are mafia or civilian ) then render a componenet

            if (eliminatedCivilians.length > 0 || eliminatedMafia.length > 0){
                if (!eliminated(alibisObj.person)){
                    return <li>
                                <a onClick={reactToMafiaChoice}>
                                    <div><p>{alibisObj.person}</p></div>
                                    <p>{alibisObj.reason}</p>
                                </a>
                            </li>
                }
            } else {
                return <li>
                                <a onClick={reactToMafiaChoice}>
                                    <div><p>{alibisObj.person}</p></div>
                                    <p>{alibisObj.reason}</p>
                                </a>
                            </li>
            }
        });
        currentState.component = <div>
                                    <p>Who is part of the mafia?:</p>
                                    <ul>
                                        {mafiaChoices}
                                    </ul>
                                </div>
    }

    return <div>
                {currentState.narration}
                {currentState.component}
                {currentState.nextBtn}
            </div>
}


export default GameSection;


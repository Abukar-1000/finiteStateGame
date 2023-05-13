import { useState } from "react";
import Narrator from "./Narrator";
/*

*/

function GameCharacter(props){

}

// componenet to render when the user is picking someone to save {victim, players}
function PickVictimToSave(props) {

    // callback to handle click event
    const reactToUserChoice = event => {
        let [currentState, updateState] = props.stateArr;
        let userSelection = event.target.innerText;
        // // update state
        // updateState(
        //     {
        //         stageType: currentState.saveVictim,
        //         currentStage: currentState.currentStage,
        //         eliminatedCivilians: currentState.eliminatedCivilians, 
        //         eliminatedMafia: currentState.eliminatedMafia,
        //         userChoice: userSelection
        //     }
        // )
        // console.log("current state")
        // console.log(currentState)
        console.log(event, event.target.innerText)
    }
    // if the user is saving someone
    // for each player name create a element to click on
    let peopleChoices = props.players.map(playerName => {
        if (playerName !== props.victim){
            // console.log(playerName)
            return <a onClick={reactToUserChoice}>
                        <li><p>{playerName}</p></li>
                    </a>
        }
    })

    return <div>
        <p>Select a victim to save:</p>
        <ul>
            {peopleChoices}
        </ul>
    </div>
}

// game starts here
function GameSection(props) {

    const GAMESTATES = {
        "saveVictim": 0,
        "accuseMafia": 1,
        "Narrate": 2
    };

    let eliminatedCivilians = new Array(); 
    let eliminatedMafia = new Array();

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
    console.log(plotStage);
    console.log(`victim ${plotStage.victim}`);
    console.log(props.players)

    const goToNext = state => {
        // alternate the state if player was choosing victim then player will accuse the mafia else player will choose a victim
        let nextState = (currentState.previousStageType === GAMESTATES.saveVictim)? GAMESTATES.accuseMafia: GAMESTATES.saveVictim;
        updateState({
            stageType: nextState,
            previousStageType: state,
            currentStage: currentState.currentStage,
            userChoice: null,
            userChoseCorrectVictim: currentState.userChoseCorrectVictim,
            userChoseCorrectMafia: currentState.userChoseCorrectMafia,
            eliminatedCivilians: currentState.eliminatedCivilians, 
            eliminatedMafia: currentState.eliminatedMafia,
            narration: null,
            component: null,
            ntxBtn: null
        });
    }


    //  validates a user's attempt to save the individual who will be killed by the mafia 
    const reactToUserVictimChoice = event => {
        let userSelection = event.target.innerText;
        let correctChoice = false;
        let narration;
        if (userSelection === plotStage.victim){
            eliminatedCivilians.push(userSelection)
            correctChoice = true;
            narration = <Narrator text = {plotStage.guessVictim.correct} />;
        } else {
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
            // eliminatedCivilians: (correctChoice)? currentState.eliminatedCivilians.push(userSelection): currentState.eliminatedCivilians, 
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
        console.log(result);
        // player click alibis instead of name 
        if (result.length > 2){
            return result.slice(0,1) + " " + result[1].slice(0,result[1].length - 1);
        }
        
        return choice;
    }

    // validates a user's attempt to indentify a mafia member
    const reactToMafiaChoice = event => {
        let userSelection = formatMafiaChoice(event.target.innerText);
        let correctChoice = false;
        let narration;
        if (userSelection === props.plot.mafiaAgent1 || userSelection === props.plot.mafiaAgent2){
            eliminatedMafia.push(userSelection)
            correctChoice = true
            narration = <Narrator text = {plotStage.guessMafia.correct} />;
        } else {
            narration = <Narrator text = {`{userSelection} was not a mafia member`} />;
        }
        let nextBtn = <button onClick = {goToNext}>➡</button>;

        updateState({
            stageType: GAMESTATES.saveVictim,
            previousStageType: GAMESTATES.accuseMafia,
            currentStage: currentState.currentStage,
            userChoice: null,
            userChoseCorrectVictim: currentState.userChoseCorrectVictim,
            userChoseCorrectMafia: currentState.userChoseCorrectMafia,
            eliminatedCivilians: currentState.eliminatedCivilians, 
            eliminatedMafia: (correctChoice)? userSelection.eliminatedMafia.push(userSelection): currentState.eliminatedMafia,
            narration: narration,
            component: currentState.component,
            nextBtn: nextBtn
        });
    }

    // user is choosing a victim to save
    if (currentState.stageType === GAMESTATES.saveVictim){
        // component = <PickVictimToSave players = {props.plot.players} victim = {plotStage.victim} stateArr = {[currentState, updateState]}/>
        // console.log(props.plot.players);
        let peopleChoices = props.plot.players.map(playerName => {
            // if there is atleast civilian who died then we should not render them
            if (eliminatedCivilians.lenght){
                if (!eliminatedCivilians.includes(plotStage.victim)){
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
    // else if (currentState.stageType === GAMESTATES.Narrate){
        
    // }
    else if (currentState.stageType === GAMESTATES.accuseMafia){
        console.log("state chnaged");
        currentState.nextBtn = null;
        let mafiaChoices = plotStage.guessMafia.alibis.map( alibisObj => {
            // if the current character is not eliminated ( whether they are mafia or civilian ) then render a componenet
            // console.log("current",currentState.eliminatedCivilians, currentState.eliminatedMafia);

            if (eliminatedCivilians.length && eliminatedMafia.length){
                if (!eliminatedCivilians.includes(alibisObj.person) && !eliminatedMafia.includes(alibisObj.person)){
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

    // let [narration, changeNarration] = useState(<Narrator text = {plotStage.guessVictim.correct} />)
    return <div>
                {currentState.narration}
                {currentState.component}
                {currentState.nextBtn}
            </div>
}


export default GameSection;



// setTimeout(() => {
//     if (!currentState.eliminatedCivilians.includes(alibisObj.person) && !currentState.eliminatedMafia.includes(alibisObj.person)){
//         return <li>
//                     <a onClick={reactToMafiaChoice}>
//                         <div><p>{alibisObj.person}</p></div>
//                         <p>{alibisObj.reason}</p>
//                     </a>
//                </li>
//     }
// }, 500);
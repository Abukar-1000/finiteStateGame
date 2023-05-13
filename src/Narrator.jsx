import { useEffect } from "react";

/* 
    Represents the game narrator in real life. 
    Responsiable for narrating at each state of the game based on the players actions
*/
function Narrator(props){

    // animate each word on to the screen
    useEffect((event) => {
        // start the animation when the page is ready, will insert a character every 20 ms js delay
        // let narratorTxt = "";
        const textOutput = document.querySelector(".narratorTxt");
        // grab each charater in the text to be displyed and store in an array
        const arr = props.text.split(" ");
        let narratorIntervalID = setInterval(grabNext,120);
        let index = 0;

        // function to animate each word of the text
        function grabNext() {

            // stop writing words to output
            if (index >= arr.length) {
                clearInterval(narratorIntervalID);
                narratorIntervalID = null;
                return;
            }

            // update the state
            textOutput.textContent += " " + arr[index];
            index += 1;
        }
    }, []);
    // animation state is held in the spanText variable
    return (
        <header>
            <header className="Narrator">
                <p className="narratorTxt"></p>
            </header>
        </header>
    );
}

export default Narrator; 
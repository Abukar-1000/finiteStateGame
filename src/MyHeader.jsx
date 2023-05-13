import { useEffect } from "react";


/*
    creating a custom header responsible for animatin the text MAFIA on screen
*/
function MyHeader() {

    // animation
    useEffect((event) => {
        // start the animation when the page is ready, will insert a character every 20 ms js delay
        let mafiaText = "MAFIA";
        let spanText = "";
        const outputSpan = document.querySelector(".mafiaHeaderTxt");
        // grab each charater in "MAFIA" and store in an array
        const arr = mafiaText.split("");
        let intervalID = setInterval(grabNext,300);
        let index = 0;

        // function to animate each char of "MAFIA"
        function grabNext() {

            // stop writing words to output
            if (index >= arr.length) {
                clearInterval(intervalID);
                intervalID = null;
                return;
            }

            // update the state
            outputSpan.textContent += arr[index];
            index += 1;
        }
    }, []);
    // animation state is held in the spanText variable
    return (
        <header>
            <header className="">
                <h1>Let's Play <span className='mafiaHeaderTxt'></span></h1>
            </header>
        </header>
    );
}


export default MyHeader;
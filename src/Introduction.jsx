import { useState } from "react";


function Introduction(props){
    let plot = props.plot;

    // create introductory JSX elements
    let welcomingP1 = <p>{plot.intro[0].discription}</p>
    let welcomingP2 = <div>
                            <p>{plot.intro[1].discription}</p>
                            <ul>
                                <li>{plot.intro[1].options[0]}</li>
                                <li>{plot.intro[1].options[1]}</li>
                            </ul>
                        </div>

    let welcomingP3 = <div>
                        <p>{plot.intro[2].discription}</p>
                        <ul>
                            <li>{plot.intro[2].options[0]}</li>
                            <li>{plot.intro[2].options[1]}</li>
                        </ul>
                        </div>

    let welcomingClosing = <div>
                                <p>{plot.intro[4].discription}</p>
                                <p>{plot.intro[5].discription}</p>
                            </div>

    // display the introduction after 2.5 seconds, when MAFIA title has been animated
    let [allContent, setContent] = useState(<></>);
    setTimeout(() => {
        setContent(
            <>
                {welcomingP1}
                {welcomingP2}
                {welcomingP3}
                {welcomingClosing}

            </>
        )
    }, 2500 )
    return <div>
                {allContent}
            </div>
}


export default Introduction;
import './App.css';
import StoryLine from './myTools';
import MyHeader from './MyHeader';
import Introduction from './Introduction';
import GameSection from './GameSection';
import { useState } from 'react';

function App() {
  // generate the plot, will be propogated down to children
  let plot = new StoryLine().generatePlot();
  let [startGame, changeActiveGameState] = useState(false);

  return (
    <div className="App">
    {/* this is the header for the page */}
      <MyHeader/>
      {/* game introduction, start game after clicks the button */}
      <Introduction plot = {plot}/>
      <button onClick={(event) => {
        changeActiveGameState(true);
      }} className='startGameButton'>➡</button>

      {/* game happens here */}
      {
        (startGame)? <GameSection plot = {plot} />: <></>
      }
    </div>
  );
}

export default App;

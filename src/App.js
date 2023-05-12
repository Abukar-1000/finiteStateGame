import './App.css';
import StoryLine from './myTools';
import MyHeader from './MyHeader';
import Introduction from './Introduction';

function App() {
  // generate the plot, will be propogated down to children
  let plot = new StoryLine().generatePlot();

  return (
    <div className="App">
    {/* this is the header for the page */}
      <MyHeader/>
      {/* game introduction */}
      <Introduction plot = {plot}/>
    </div>
  );
}

export default App;

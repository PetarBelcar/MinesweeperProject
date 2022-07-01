import Header from "./header";
import Minsweeper from "./minesweeper";

function App() {
  var mineClicked = () : void =>
  {
    console.log("Mine was clicked!");
  }


  return (
    <div>
      <Header />
      <section>
        <div id="lifeCounter"></div>
        <Minsweeper seed={45892473} mineCLicked={mineClicked} dimensionOfMinesweeper={15}/>
      </section>
    </div>
  );
}

export default App;
import Header from "./header";
import Minsweeper from "./minesweeper";

function App() {
  var mineClicked = () : void =>
  {

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
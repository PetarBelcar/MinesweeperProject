import { useEffect, useState } from "react";
import Header from "./header";
import Minsweeper from "./minesweeper";

function App() {
  var [minesClicked, setMinesClicked] = useState(0);

  var mineClicked = () : void =>
  {
    console.log("Number of mines clicked: " + ++minesClicked);
  }


  return (
    <div>
      <Header />
      <section>
        <div id="lifeCounter">{}</div>
        <Minsweeper seed={45892473} mineCLicked={mineClicked} dimensionOfMinesweeper={15}/>
      </section>
    </div>
  );
}

export default App;
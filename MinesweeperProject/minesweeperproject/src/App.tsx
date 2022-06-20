import Header from "./header";
import LifeCounter from "./lifeCounter";
import Minsweeper from "./minesweeper";

function App() {
  return (
    <body>
      <Header />
      <section>
        <LifeCounter />
        <Minsweeper seed={45892473}/>
      </section>
    </body>
  );
}

export default App;
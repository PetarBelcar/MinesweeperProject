import Header from "./header";
import LifeCounter from "./lifeCounter";
import Minsweeper from "./minesweeper";

function App() {
  return (
    <div>
      <Header />
      <section>
        <LifeCounter />
        <Minsweeper seed={45892473}/>
      </section>
    </div>
  );
}

export default App;
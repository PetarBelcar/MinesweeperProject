import MinesweeperTile from "./minesweeperTile";

function Minsweeper(props : {seed:number}):JSX.Element
{
    function GenerateMinefield(seed : number) : JSX.Element[][]
    {
        var minefield : JSX.Element[][] = [];
        var numberOfMines = 0;
        //seedrandom(seed.toString()); Somehow make this seeded. I'm honestly astounded that JavaScript does not have this by default

        for (let yAxis = 0; yAxis < 15; yAxis++) {
            minefield[yAxis] = [];
            for (let xAxis = 0; xAxis < 15; xAxis++) {
                var isMine = (numberOfMines >= 40) ? false : (Math.random() >= 0.16) ? false : true;
                numberOfMines += (isMine) ? 1 : 0;

                minefield[yAxis][xAxis] = <MinesweeperTile isMine={isMine} isClicked={false}/>
            }
            minefield[yAxis][20] = <br></br>;
        }
        
        console.log(numberOfMines);
        return minefield;
    }

    return(
        <div id="minesweeperField">
            <div id="minesweeperFieldTiles">
            {
                GenerateMinefield(props.seed)
            }
            </div>
        </div>
    );
}

export default Minsweeper;
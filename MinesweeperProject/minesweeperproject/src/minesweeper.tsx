import MinesweeperTile from "./minesweeperTile";

function Minsweeper(props : {seed:number}):JSX.Element
{
    function GenerateMinefield(seed : number) : JSX.Element[][]
    {
        var minefield : JSX.Element[][] = [];

        for (let yAxis = 0; yAxis < 15; yAxis++) {
            minefield[yAxis] = [];
            for (let xAxis = 0; xAxis < 15; xAxis++) {
                minefield[yAxis][xAxis] = <MinesweeperTile isMine={(seed % 45) ? false : true}/>
            }
            minefield[yAxis][20] = <br></br>;
        }

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
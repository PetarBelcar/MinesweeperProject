import MinesweeperTile from "./minesweeperTile";

var dimensionOfMinesweeper = 15;

function Minsweeper(props : {seed:number}):JSX.Element
{
    var CalculateTheNumberOfAdjecentMines = (yAxis : number, xAxis: number, minefieldData : {isMine : boolean}[][]) : number =>
    {
        var numberOfAdjacentMines = 0;

        for (let i = yAxis - 1; i <= yAxis + 1; i++) 
        {
            for(let j = xAxis - 1; j <= xAxis + 1; j++)
            {
                if(!(i === yAxis  && j === xAxis) && (i >= 0 && j >= 0) && (i < dimensionOfMinesweeper && j < dimensionOfMinesweeper)) if(minefieldData[i][j].isMine) numberOfAdjacentMines++;
            }
        }

        return numberOfAdjacentMines;
    }

    function GenerateMinefield(seed : number) : JSX.Element[][]
    {
        interface minefieldTileData
        {
            isMine : boolean
        }

        var minefieldData : minefieldTileData[][] = [];
        var minefieldJSX : JSX.Element[][] = [];
        var numberOfMines = 0;
        //seedrandom(seed.toString()); Somehow make this seeded. I'm honestly astounded that JavaScript does not have this by default

        for (let yAxis = 0; yAxis < dimensionOfMinesweeper; yAxis++) {
            minefieldData[yAxis] = [];
            for (let xAxis = 0; xAxis < dimensionOfMinesweeper; xAxis++) {
                let isMine = (numberOfMines >= 40) ? false : (Math.random() >= 0.12) ? false : true;
                numberOfMines += (isMine) ? 1 : 0;

                minefieldData[yAxis][xAxis] = {isMine};
                minefieldData[yAxis][xAxis].isMine = isMine;
            }
            
        }

        for (let yAxis = 0; yAxis < dimensionOfMinesweeper; yAxis++) {
            console.log(yAxis);
            minefieldJSX[yAxis] = [];
            for (let xAxis = 0; xAxis < dimensionOfMinesweeper; xAxis++) {
                let isMine = minefieldData[yAxis][xAxis].isMine;
                let numberOfAdjacentMines = CalculateTheNumberOfAdjecentMines(yAxis, xAxis, minefieldData);
                //let numberOfAdjacentMines = 0;

                //minefieldJSX[yAxis] = [];
                minefieldJSX[yAxis][xAxis] = <MinesweeperTile isMine={isMine} isClicked={false} numberOfAdjacentMines={numberOfAdjacentMines}/>
            }
            //minefieldJSX[yAxis][dimensionOfMinesweeper] = <br/>;
        }
        
        console.log(numberOfMines);
        return minefieldJSX;
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
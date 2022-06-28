import MinesweeperTile from "./minesweeperTile";

interface minefieldTileData
{
    isMine : boolean
}

var dimensionOfMinesweeper = 15;

function Minsweeper(props : {seed:number}):JSX.Element
{
    var CalculateTheNumberOfAdjecentMines = (yAxis : number, xAxis: number, minefieldData : minefieldTileData[][]) : number =>
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

    var DoesTileHaveAdjacentNoMineTiles = (minefieldData : minefieldTileData[][], yAxis : number, xAxis : number) : boolean =>
    {
        var doesTileHaveAdjecentNoMineTiles = true;

        for (let i = yAxis - 1; i <= yAxis + 1; i++) 
        {
            for(let j = xAxis - 1; j <= xAxis + 1; j++)
            {
                if(!(i === yAxis  && j === xAxis) && (i >= 0 && j >= 0) && (i < dimensionOfMinesweeper && j < dimensionOfMinesweeper)) 
                    if(CalculateTheNumberOfAdjecentMines(i, j, minefieldData) === 0) doesTileHaveAdjecentNoMineTiles = false;
            }
        }

        //console.log(yAxis + ":" + xAxis + " " + minefieldData[yAxis][xAxis].isMine)
        return doesTileHaveAdjecentNoMineTiles;
    }

    function GenerateMinefield(seed : number) : JSX.Element[][]
    {
        var minefieldData : minefieldTileData[][] = [];
        var minefieldJSX : JSX.Element[][] = [];
        var numberOfMines = 0;
        //seedrandom(seed.toString()); Somehow make this seeded. I'm honestly astounded that JavaScript does not have this by default

        for (let yAxis = 0; yAxis < dimensionOfMinesweeper; yAxis++) {
            minefieldData[yAxis] = [];
            for (let xAxis = 0; xAxis < dimensionOfMinesweeper; xAxis++) {
                let isMine = false;

                minefieldData[yAxis][xAxis] = {isMine};
            }
        }

        while(numberOfMines <= dimensionOfMinesweeper * dimensionOfMinesweeper * 0.15 + 1)
        {
            let xRandom = Math.round(Math.random() * (dimensionOfMinesweeper - 1));
            let yRandom = Math.round(Math.random() * (dimensionOfMinesweeper - 1));

            console.log(xRandom + ":" + yRandom);

            if(!minefieldData[yRandom][xRandom].isMine)
            {
                minefieldData[yRandom][xRandom].isMine = true;
                numberOfMines++;
            }
        }

        for (let yAxis = 0; yAxis < dimensionOfMinesweeper; yAxis++) {
            minefieldJSX[yAxis] = [];
            for (let xAxis = 0; xAxis < dimensionOfMinesweeper; xAxis++) {
                let isMine = minefieldData[yAxis][xAxis].isMine;
                let numberOfAdjacentMines = CalculateTheNumberOfAdjecentMines(yAxis, xAxis, minefieldData);

                minefieldJSX[yAxis][xAxis] = <MinesweeperTile key={yAxis + ":" + xAxis} isMine={isMine} isClicked={false} numberOfAdjacentMines={numberOfAdjacentMines} adjecentNoMine={DoesTileHaveAdjacentNoMineTiles(minefieldData, yAxis, xAxis)}/>
            }
        }
        
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
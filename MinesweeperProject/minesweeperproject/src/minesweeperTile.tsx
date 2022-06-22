import { useState } from "react";

function MinesweeperTile(props : {numberOfAdjacentMines : number, isMine : boolean, isClicked : boolean})
{
    var [tileIsClicked, setTileIsClicked] = useState(false);

    var setTileToClicked = () => setTileIsClicked(true);

    return(
        <button className={(tileIsClicked) ? "minesweeprTileClicked" : "minesweeprTileNotClicked"} onClick={setTileToClicked}>{(tileIsClicked) ? ((props.isMine) ? "X" : props.numberOfAdjacentMines.toString()) : ""}</button>
    )
}

export default MinesweeperTile;
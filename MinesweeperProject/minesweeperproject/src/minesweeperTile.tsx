import { useState } from "react";

function MinesweeperTile(props : {numberOfAdjecentMines? : number, isMine : boolean, isClicked : boolean})
{
    var [tileIsClicked, setTileIsClicked] = useState(false);

    var setTileToClicked = () => setTileIsClicked(true);

    return(
        <div className={(tileIsClicked) ? "minesweeprTileClicked" : "minesweeprTileNotClicked"} onClick={setTileToClicked}>{(props.isMine) ? "X" : "O"}</div>
    )
}

export default MinesweeperTile;
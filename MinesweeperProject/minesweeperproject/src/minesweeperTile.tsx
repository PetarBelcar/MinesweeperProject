import { useState } from "react";

function MinesweeperTile(props : {numberOfAdjacentMines : number, isMine : boolean, isClicked : boolean, adjecentNoMine : boolean})
{
    var [tileIsClicked, setTileIsClicked] = useState(false);

    var setTileToClicked = () => setTileIsClicked(true);

    var setToClickedIfNoMinesOrAdjecentNoMine = () => 
    {
        if(!tileIsClicked && ((props.numberOfAdjacentMines === 0 && !props.isMine) || (!props.adjecentNoMine && !props.isMine)))
        {
            setTileToClicked();
        }
    }

    setToClickedIfNoMinesOrAdjecentNoMine();

    return(
        <button className={(tileIsClicked) ? "minesweeprTileClicked" : "minesweeprTileNotClicked"} onClick={setTileToClicked}>{(tileIsClicked) ? ((props.isMine) ? "X" : ((props.numberOfAdjacentMines === 0 ) ? "" : props.numberOfAdjacentMines.toString())) : ""}</button>
    )
}

export default MinesweeperTile;
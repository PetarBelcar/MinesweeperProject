import { useState } from "react";

function MinesweeperTile(props : {numberOfAdjacentMines : number, isMine : boolean, isClicked : boolean, adjecentNoMine : boolean, mineClicked : Function})
{
    var [tileIsClicked, setTileIsClicked] = useState(false);

    var setTileToClicked = () => setTileIsClicked(true);

    var setToClickedIfNoMinesOrAdjecentNoMine = () : void => 
    {
        if((!tileIsClicked && (props.numberOfAdjacentMines === 0 || !props.adjecentNoMine)) && !props.isMine)
        {
            setTileToClicked();
        }
    }

    var clickOnTile = () : void => 
    {
        if(!tileIsClicked)
        {
            setTileToClicked();
            if(props.isMine) props.mineClicked();
        }
    }

    setToClickedIfNoMinesOrAdjecentNoMine();

    return(
        <button className={(tileIsClicked) ? "minesweeprTileClicked" : "minesweeprTileNotClicked"} onClick={clickOnTile}>{(tileIsClicked) ? ((props.isMine) ? "X" : ((props.numberOfAdjacentMines === 0 ) ? "" : props.numberOfAdjacentMines.toString())) : ""}</button>
    )
}

export default MinesweeperTile;
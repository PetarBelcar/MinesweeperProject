function MinesweeperTile(props : {numberOfAdjecentMines? : number, isMine : boolean})
{
    return(
        <button className="minesweeprTileNotClicked">{(props.isMine) ? "X" : ""}</button>
    )
}

export default MinesweeperTile;
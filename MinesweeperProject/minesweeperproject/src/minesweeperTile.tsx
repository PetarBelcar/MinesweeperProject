function MinesweeperTile(props : {numberOfAdjecentMines : number})
{
    return(
        <button className="minesweeprTileNotClicked">{props.numberOfAdjecentMines}</button>
    )
}

export default MinesweeperTile;
import React from "react";

function Backdrop(props : {closeBackDrop : React.MouseEventHandler<HTMLDivElement>})
{
    return(
        <div className="backdrop" onClick={props.closeBackDrop}></div>
    );
}

export default Backdrop;
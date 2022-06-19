import { useState } from "react";

import Modal from "./modal";
import Backdrop from "./backdrop";

function TodoEntity(prop : {title : string, numberOfChars? : number})
{
    var [modelIsOpen, setModelOpen] = useState(false);

    function deleteHandler() : void
    {
        setModelOpen(true);
    }

    function closeBackDrop() : void
    {
        setModelOpen(false);
    }

    function modalCancle() : void
    {
        setModelOpen(false);
    }

    function modalConfirm() : void
    {
        setModelOpen(false)
    }

    function RenderModal(state : boolean) : JSX.Element
    {
        if(state) return <Modal modalCancle={modalCancle} modalConfirm={modalConfirm}/>;
        else return <div />;
    }

    function RenderBackDrop(state : boolean) : JSX.Element
    {
        if(state) return <Backdrop closeBackDrop={closeBackDrop}/>
        else return <div />
    }

    return(
        <div className="todoEntity">
            <h2>{prop.title}</h2>
            <div className="buttonDiv" onClick={deleteHandler}><button>Delete</button></div>
            {RenderModal(modelIsOpen)}
            {RenderBackDrop(modelIsOpen)}
        </div>
    )
}

export default TodoEntity;
import React from "react";

function Modal(props : {modalCancle : React.MouseEventHandler<HTMLButtonElement>,
                        modalConfirm: React.MouseEventHandler<HTMLButtonElement>})
{
    return(
        <div className="overlayBox">
            <p>Are you sure?</p>
            <div className="buttonDiv">
            <button onClick={props.modalCancle}>Cancle</button>
            <button onClick={props.modalConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal;
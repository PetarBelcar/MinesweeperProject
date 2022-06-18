function Modal()
{
    return(
        <div className="overlayBox">
            <p>Are you sure?</p>
            <div className="buttonDiv">
            <button>Cancle</button>
            <button>Confirm</button>
            </div>
        </div>
    )
}

export default Modal;
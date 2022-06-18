import Modal from "./modal";

function TodoEntity(prop : {title : string, numberOfChars? : number})
{
    function deleteHandler() : JSX.Element
    {
        return (<Modal/>);
    }

    return(
        <div className="todoEntity">
            <h2>{prop.title}</h2>
            <div className="buttonDiv" onClick={deleteHandler}><button>Delete</button></div>
        </div>
    )
}

export default TodoEntity;
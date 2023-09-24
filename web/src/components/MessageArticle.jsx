const MessageArticle =({eachMessage, handleDelete})=>{

    const handleClick=(ev)=>{
        const id= (ev.target.id)
        handleDelete(id)
    }
    return(
        <li key={eachMessage._id} id={eachMessage._id}>
            <article >
                <h2>{eachMessage.subject}</h2>
                <p>From: {eachMessage.name}. Contact: {eachMessage.email}</p>
                <p>Mensaje:</p>
                <p>{eachMessage.message}</p>
                <button id={eachMessage._id} onClick={handleClick}>Delete</button>
            </article>
        </li>
    )
}

export default MessageArticle
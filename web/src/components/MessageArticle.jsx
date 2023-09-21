const MessageArticle =({eachMessage})=>{
    return(
        <li key={eachMessage._id} id={eachMessage._id}>
            <article>
                <h2>{eachMessage.subject}</h2>
                <p>{eachMessage.name} contacto: {eachMessage.email}</p>
                <h3>Mensaje:</h3>
                <p>{eachMessage.message}</p>
            </article>
        </li>
    )
}

export default MessageArticle
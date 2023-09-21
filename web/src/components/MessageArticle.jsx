const MessageArticle =({eachMessage})=>{
    return(
        <li key={eachMessage._id}>
            <article>
                <h1>{eachMessage.subject}</h1>
                <p>{eachMessage.name} contacto: {eachMessage.email}</p>
                <p>{eachMessage.message}</p>
            </article>
        </li>
    )
}

export default MessageArticle
import ButtonFunctional from './ButtonFunctional'

const MessageArticle =({eachMessage, handleDelete})=>{
  
    return(
        <li key={eachMessage._id} id={eachMessage._id}>
            <article >
                <h2>{eachMessage.subject}</h2>
                <p>From: {eachMessage.name}. Contact: {eachMessage.email}</p>
                <p>Mensaje:</p>
                <p>{eachMessage.message}</p>
                <ButtonFunctional id={eachMessage._id} handleDelete={handleDelete} textValue={'Delete'}/>
            </article>
        </li>
    )
}
export default MessageArticle
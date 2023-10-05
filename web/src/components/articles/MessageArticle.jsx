import DeleteButton from '../buttons/DeleteButton'

const MessageArticle =({eachMessage, handleDelete})=>{
  
    return(
        <li key={eachMessage._id} id={eachMessage._id}>
            <article className='border border-gray-200 p-3 w-64 shadow'>
                <h3 className='mb-2 text-lg font-bold'>{eachMessage.subject}</h3>
                <p><span className='italic'>From:</span> {eachMessage.name} </p>
                <p><span className='italic'>Contact:</span> {eachMessage.email}</p>
                <p> <span className='italic'>Mensaje:</span></p>
                <p className='mb-4'>{eachMessage.message}</p>
                <DeleteButton id={eachMessage._id} handleDelete={handleDelete} textValue={'Delete'}/>
            </article>
        </li>
    )
}
export default MessageArticle
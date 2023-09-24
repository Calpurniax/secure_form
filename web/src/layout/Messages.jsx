import { getMessages, deleteMessage} from '../services/msgAndUsers';
import { useEffect, useState } from 'react';
import MessageArticle from '../components/MessageArticle';

const Messages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages().then((response) => {
            setMessages(response)
        })
    }, [])

    const handleDelete=(id)=>{        
        deleteMessage(id)
    }

    const renderMsg = () => {
        if (messages.length > 0) {
            return messages.map(eachMessage => {
                return <MessageArticle eachMessage={eachMessage} key={eachMessage._id} handleDelete={handleDelete}/>
            })
        } else return <p>No hay mensajes</p>
    }
    
    return (
        <main>
            <section>
                <h1>Messages</h1>
                <ul>{renderMsg()}</ul>
            </section>
        </main>
    )
}
export default Messages
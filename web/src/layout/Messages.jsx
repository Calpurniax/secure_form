import { getMessages } from '../services/getMsg';
import { useEffect, useState } from 'react';
import MessageArticle from '../components/MessageArticle';

const Messages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages().then((response) => {
            setMessages(response)
        })
    }, [])

    const renderMsg = () => {
        if (messages.length > 0) {
            return messages.map(eachMessage => {
                return <MessageArticle eachMessage={eachMessage} />
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
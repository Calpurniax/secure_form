import { getMessages, deleteMessage } from '../services/msgAndUsers';
import { useEffect, useState } from 'react';
import MessageArticle from '../components/MessageArticle';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((response) => {
      setMessages(response);
    });
  }, []);

  const handleDelete = (id) => {
    const messagePosition = messages.findIndex((each) => each._id === id);
    if (messagePosition === -1) return console.log('no messages');
    deleteMessage(id);
    return setMessages(messages.splice(messagePosition, 1));
  };

  const renderMsg = () => {
    if (messages.length > 0) {
      return messages.map((eachMessage) => {
        return (
          <MessageArticle
            eachMessage={eachMessage}
            key={eachMessage._id}
            handleDelete={handleDelete}
          />
        );
      });
    } else return <p>No hay mensajes</p>;
  };

  return (
    <main>
      <section>
        <h2>Messages</h2>
        <ul>{renderMsg()}</ul>
      </section>
    </main>
  );
};
export default Messages;

import { getMessages, deleteMessage } from '../services/msgEndpoints';
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
    const newArray = messages.filter((each) => each._id !== id);   
    deleteMessage(id);
    return setMessages(newArray);
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

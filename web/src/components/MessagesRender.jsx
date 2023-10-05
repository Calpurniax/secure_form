import { useEffect, useState } from 'react';
import { getMessages, deleteMessage } from '../services/msgEndpoints';
import MessageArticle from './articles/MessageArticle';

const MessagesRender = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((response) => {
      setMessages(response);
      
    });
  }, []);

  const handleDelete = async (id) => {    
    const newArray = messages.filter((each) => each._id !== id);
    const response = await deleteMessage(id);
    if(response.status===200){
      setMessages(newArray);
    }    
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

    <section className='flex flex-col justify-center items-center mt-6'>
      <h2 className='mb-8 text-2xl'>Messages</h2>
      <div className='w-11/12'>
        <ul className='flex justify-start flex-wrap gap-6'>{renderMsg()}</ul>
      </div>
    </section>

  );
};
export default MessagesRender;

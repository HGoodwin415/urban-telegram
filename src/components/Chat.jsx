import { useState } from 'react';
import  PropTypes from 'prop-types';

const Chat = ({ match }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        setMessages([...messages, { text: input, sender: 'You' }]);
        setInput('');
        // Send message to the backend or real-time messaging service
    };

    return (
        <div className="chat">
            <h2>Chat with {match.name}</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.sender}: </strong>{msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

Chat.propTypes = {
    match: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Chat;

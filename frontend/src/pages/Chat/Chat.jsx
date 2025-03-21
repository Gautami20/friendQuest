// import './Chat.css';
// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
// const socket = io(); // Initialize socket connection

// const Chat = () => {
//   return (
//     <div class="chat-app">
//         <div class="chat-screen join-screen active"
//             style="border: 1px solid; padding: 10px; box-shadow: 5px 10px 18px #5d5c5c; border-radius: 10px;">
//             <div class="chat-form">
//                 <h2>Start Chat</h2>
//                 <div class="chat-form-input">
//                     <label>Username</label>
//                     <input type="text" id="chat-username"/>
//                 </div>
//                 <div class="chat-form-input">
//                     <button id="chat-join-user">Join</button>
//                 </div>
//             </div>
//         </div>
//         <div class="chat-screen chatscreen" style="border-radius: 10px;">
//             <div class="chat-header">
//                 <div class="chat-logo">Chatroom</div>
//                 <button id="exit-chat">Exit</button>
//             </div>
//             <div class="chat-messages">
//             </div>
//             <div class="chat-typebox">
//                 <input type="text" id="chat-message-input"/>
//                 <button id="chat-send-message">Send</button>
//             </div>
//         </div>
//     </div>
    
//   )
// }

// export default Chat

import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import io from 'socket.io-client';

const socket = io(); // Initialize socket connection

const ChatApp = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);
  const messageContainerRef = useRef(null);

  // Handle user joining
  const handleJoin = () => {
    if (username.length === 0) return;
    socket.emit('newuser', username);
    setJoined(true);
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (message.length === 0) return;

    const messageData = { username, text: message };
    renderMessage('my', messageData);
    socket.emit('chat', messageData);
    setMessage(''); // Clear input field
  };

  // Scroll chat to the end when a new message is added
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight -
        messageContainerRef.current.clientHeight;
    }
  }, [messages]);

  // Listen for events from the socket
  useEffect(() => {
    socket.on('update', (update) => renderMessage('update', update));

    socket.on('chat', (message) => renderMessage('other', message));

    return () => {
      // Cleanup socket listeners on unmount
      socket.off('update');
      socket.off('chat');
    };
  }, []);

  // Handle exit chat
  const handleExitChat = () => {
    socket.emit('exituser', username);
    setJoined(false);
    window.location.reload();
  };

  // Function to render messages
  const renderMessage = (type, message) => {
    setMessages((prevMessages) => [...prevMessages, { type, message }]);
  };

  return (
    <div className="chat-app">
      {!joined ? (
        <div className="chat-screen join-screen active" style={styles.joinScreen}>
          <div className="chat-form">
            <h2>Start Chat</h2>
            <div className="chat-form-input">
              <label>Username</label>
              <input
                type="text"
                id="chat-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="chat-form-input">
              <button id="chat-join-user" onClick={handleJoin}>
                Join
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-screen chatscreen" style={styles.chatScreen}>
          <div className="chat-header">
            <div className="chat-logo">Chatroom</div>
            <button id="exit-chat" onClick={handleExitChat}>
              Exit
            </button>
          </div>
          <div className="chat-messages" ref={messageContainerRef} style={styles.messages}>
            {messages.map((msg, index) => {
              if (msg.type === 'my') {
                return (
                  <div className="message my-message" key={index}>
                    <div>
                      <div className="name">You</div>
                      <div className="text">{msg.message.text}</div>
                    </div>
                  </div>
                );
              } else if (msg.type === 'other') {
                return (
                  <div className="message other-message" key={index}>
                    <div>
                      <div className="name">{msg.message.username}</div>
                      <div className="text">{msg.message.text}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="update" key={index}>
                    {msg.message}
                  </div>
                );
              }
            })}
          </div>
          <div className="chat-typebox" style={styles.typebox}>
            <input
              type="text"
              id="chat-message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button id="chat-send-message" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  joinScreen: {
    border: '1px solid',
    padding: '10px',
    boxShadow: '5px 10px 18px #5d5c5c',
    borderRadius: '10px',
  },
  chatScreen: {
    borderRadius: '10px',
  },
  messages: {
    height: '300px',
    overflowY: 'scroll',
  },
  typebox: {
    display: 'flex',
    gap: '10px',
  },
};

export default ChatApp;

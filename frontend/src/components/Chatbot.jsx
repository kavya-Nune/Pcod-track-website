import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        messages: newMessages,
      });

      const botReply = response.data;
      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      console.error('Chatbot error:', error.response?.data || error.message);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-lg w-80 flex flex-col">
          <div className="bg-purple-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">AI Chatbot</h3>
            <button onClick={toggleChat} className="text-white">✖</button>
          </div>

          <div className="p-3 h-64 overflow-y-auto">
            {messages.map((msg, idx) => (
              <p key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right text-pink-500' : 'text-gray-700'}`}>
                <strong>{msg.role === 'user' ? 'You' : '🤖 Bot'}:</strong> {msg.content}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t">
            <textarea
              rows={2}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }}}
              className="w-full border rounded p-2 text-sm resize-none"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="w-full bg-purple-600 text-white mt-2 py-1 rounded hover:bg-purple-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700"
        >
          💬
        </button>
      )}
    </div>
  );
}




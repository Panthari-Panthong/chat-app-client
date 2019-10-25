import React from 'react';
import './App.css';
import Chatroom from './components/Chatroom'
import ChatroomForm from './components/ChatroomForm'
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Panthari Chat App</h1>
      </header>
      <Chatroom />
      <ChatroomForm />
    </div>
  );
}

export default App;

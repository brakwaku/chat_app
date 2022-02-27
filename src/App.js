import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'e50b504e-8770-48b5-aa85-0f3e62eeec20';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    //https://chatengine.io/docs/react/v1
    <ChatEngine
     height='100vh'
     projectID={projectID}
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

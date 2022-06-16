import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;

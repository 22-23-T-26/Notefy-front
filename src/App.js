import logo from './logo.svg';
import './App.css';
import AuthService from './services/AuthService';
import { useEffect } from 'react';
function App() {
  const { login } = AuthService();


  useEffect(() => {
    const test = async () => {
      // const response = await login('admin', 'admin1');
      // console.log(response);
    }
    test();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

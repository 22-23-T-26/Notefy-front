import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthService from './services/AuthService';
import { useEffect } from 'react';
import User from "./components/User/User";

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
      
      <User />

    </div>
  );
}

export default App;

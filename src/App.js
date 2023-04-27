import logo from './logo.svg';
import './App.css';
import AuthService from './services/AuthService';
import { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterForm from "./components/Login/Login";

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
            <Navbar />
            <LoginRegisterForm />
        </div>
    );
}

export default App;

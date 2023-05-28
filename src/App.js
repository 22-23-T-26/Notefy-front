import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthService from './services/AuthService';
import { useEffect } from 'react';
import User from "./components/User/User";
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterForm from "./components/Login/Login";
import MaterialsPage from './components/Materials/Materials';
import Messages from "./components/Messages/Messages";

function App() {
    const { login } = AuthService();

    useEffect(() => {
        const test = async () => {
            const response = await login('admin', 'admin');
            console.log(response);
        }
        test();
    })

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<LoginRegisterForm/>}/>
                <Route path='/auth' element={<LoginRegisterForm/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/materials' element={<MaterialsPage/>}/>
                <Route path='/messages' element={<Messages/>}/>
            </Routes>
        </div>
    );

}

export default App;

import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthService from './services/AuthService';
import { useEffect } from 'react';
import User from "./components/User/User";
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterForm from "./components/Login/Login";
import MaterialsPage from './components/Materials/Materials';
import Forum from './components/Forum/Forum';
import Disucssion from './components/Forum/Disucssion';
import MaterialPage from "./components/Materials/MaterialPage";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<LoginRegisterForm />} />
                <Route path='/auth' element={<LoginRegisterForm />} />
                <Route path='/user' element={<User />} />
                <Route path='/materials' element={<MaterialsPage />} />
                <Route path='/forum' element={<Forum />} />
                <Route path='/forum/:discussionId' element={<Disucssion />} />
                <Route path='/materials' element={<MaterialsPage/>}/>
                <Route path="/material/:id" element={<MaterialPage/>} />            
            </Routes>
        </div>
    );

}

export default App;

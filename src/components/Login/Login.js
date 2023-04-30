import React, { useState } from "react";
import './Login.css';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Validate and process login data
        // ... Your login logic here ...
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <input
                type="text"
                placeholder="Корисничко име"
                value={loginData.username}
                onChange={(event) =>
                    setLoginData({ ...loginData, username: event.target.value })
                }
            />
            <input
                type="password"
                placeholder="Лозинка"
                value={loginData.password}
                onChange={(event) =>
                    setLoginData({ ...loginData, password: event.target.value })
                }
            />
            <div className="forgot-password">
                <a href="#">Заборавена лозинка?</a>
            </div>
            <button type="submit">Најави се</button>
        </form>
    );
};

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // Validate and process register data
        // ... Your register logic here ...
    };

    return (
        <form onSubmit={handleRegisterSubmit}>
            <div className="register-form">
                <input
                    type="text"
                    placeholder="Име"
                    value={registerData.firstName}
                    onChange={(event) =>
                        setRegisterData({ ...registerData, firstName: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Презиме"
                    value={registerData.lastName}
                    onChange={(event) =>
                        setRegisterData({ ...registerData, lastName: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Корисничко име"
                    value={registerData.username}
                    onChange={(event) =>
                        setRegisterData({ ...registerData, username: event.target.value })
                    }
                />
                <input
                    type="email"
                    placeholder="Емаил"
                    value={registerData.email}
                    onChange={(event) =>
                        setRegisterData({ ...registerData, email: event.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Лозинка"
                    value={registerData.password}
                    onChange={(event) =>
                        setRegisterData({ ...registerData, password: event.target.value })
                    }
                />
            </div>
            <div className="terms">
                <label>
                    <input type="checkbox" required />
                    Се согласувам со условите за користење на Notefy
                </label>
            </div>
            <button type="submit">Регистрирај се</button>
        </form>
    );
};

const LoginRegisterForm = () => {
    const [activeTab, setActiveTab] = useState("login");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="login-register-wrapper">
            <div className="login-register-container">
                <div className="logo-column">
                    <h3>Добредојдовте на</h3>
                    <img className="logo-notefy-login" src="./logo.png" alt="logo" width={150}/>
                </div>
                <div className="vertical-line"></div>
                <div className="login-register-column">
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === "login" ? "active" : ""}`}
                            onClick={() => handleTabChange("login")}
                        >
                            НАЈАВА
                        </div>
                        <div
                            className={`tab ${activeTab === "register" ? "active" : ""}`}
                            onClick={() => handleTabChange("register")}
                        >
                            РЕГИСТРАЦИЈА
                        </div>
                    </div>
                    {activeTab === "login" ? (
                        <LoginForm />
                    ) : (
                        <RegisterForm />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterForm;


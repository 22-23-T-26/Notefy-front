import React, { useEffect, useState } from "react";
import './Login.css';
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const { login } = AuthService();
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await login(loginData.username, loginData.password);
            localStorage.setItem("token", res);
            navigate("/materials");
        } catch (error) {
            if (error.response?.data?.fieldErrors) {
                const acc = {}
                error.response?.data?.fieldErrors.forEach((current) => {
                    console.log(current)
                    if (acc[current.field]) {
                        acc[current.field] = acc[current.field] + ", " + current.message;
                    } else {
                        acc[current.field] = current.message;
                    }
                });
                setFieldErrors(acc);
            } else {
                setError(error?.response?.data?.message);
            }
        }
    };
    const onChange = (event) => {
        setLoginData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        setFieldErrors((prev) => ({ ...prev, [event.target.name]: undefined }));
        setError(undefined);
    }
    return (
        <form onSubmit={handleLoginSubmit}>
            <div style={{ color: 'red' }}>{error}</div>
            <input
                type="text"
                placeholder="Корисничко име"
                name="username"
                value={loginData.username}
                onChange={onChange}
            />
            <div style={{ color: 'red' }}>{fieldErrors.username}</div>
            <input
                type="password"
                placeholder="Лозинка"
                name="password"
                value={loginData.password}
                onChange={onChange}
            />
            <div style={{ color: 'red' }}>{fieldErrors.password}</div>

            <div className="forgot-password" style={{ color: "#DC6628" }}>
                <a href="#" style={{ color: "#DC6628" }}>Заборавена лозинка?</a>
            </div>
            <button type="submit" className="btn btn-dark">НАЈАВИ СЕ</button>
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
        telephone: "",
    });


    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const { register } = AuthService();

    const navigate = useNavigate();

    const onChange = (event) => {
        const { name, value } = event.target;

        if (name === "email" && value.trim() !== "") {
            if (!/\S+@\S+\.\S+/.test(value)) {
                setFieldErrors((prev) => ({ ...prev, [name]: "Invalid email address." }));
            } else {
                setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
            }
        }

        setRegisterData((prev) => ({ ...prev, [name]: value }));
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
        setError(undefined);

    };
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await register(registerData);
            localStorage.setItem("token", res);
            navigate("/materials");
        } catch (error) {
            if (error.response?.data?.fieldErrors) {
                const acc = {}
                error.response?.data?.fieldErrors.forEach((current) => {
                    console.log(current)
                    if (acc[current.field]) {
                        acc[current.field] = acc[current.field] + ", " + current.message;
                    } else {
                        acc[current.field] = current.message;
                    }
                });
                setFieldErrors(acc);
            } else {
                setError(error?.response?.data?.message);
            }
        }
    };

    return (
        <form onSubmit={handleRegisterSubmit}>
            <div className="register-form">
                <div style={{ color: "red" }}>{error}</div>

                <div className="input-row">
                    <div>
                        <input
                            style={fieldErrors.firstName ? { border: "1px solid red" } : {}}
                            type="text"
                            placeholder="Име"
                            name="firstName"
                            value={registerData.firstName}
                            onChange={onChange}

                        />
                        <div style={{ color: "red" }}>{fieldErrors.firstName}</div>
                    </div>
                    <div>
                        <input
                            style={fieldErrors.lastName ? { border: "1px solid red" } : {}}
                            type="text"
                            placeholder="Презиме"
                            name="lastName"
                            value={registerData.lastName}
                            onChange={onChange}
                        />

                        <div style={{ color: "red" }}>{fieldErrors.lastName}</div>
                    </div>
                </div>
                <input
                    style={fieldErrors.username ? { border: "1px solid red" } : {}}
                    type="text"
                    placeholder="Корисничко име"
                    name="username"
                    value={registerData.username}
                    onChange={onChange}
                />
                <div style={{ color: "red" }}>{fieldErrors.username}</div>
                <input
                    style={fieldErrors.email ? { border: "1px solid red" } : {}}
                    type="email"
                    placeholder="Е-маил"
                    name="email"
                    value={registerData.email}
                    onChange={onChange}
                />
                <div style={{ color: "red" }}>{fieldErrors.email}</div>
                <input
                    style={fieldErrors.password ? { border: "1px solid red" } : {}}
                    type="password"
                    placeholder="Лозинка"
                    name="password"
                    value={registerData.password}
                    onChange={onChange}
                />
                <div style={{ color: "red" }}>{fieldErrors.password}</div>
                <input
                    type="text"
                    placeholder="Телефонски број"
                    name="telephone"
                    value={registerData.telephone}
                    onChange={onChange}
                />
                <div style={{ color: "red" }}>{fieldErrors.telephone}</div>
            </div>
            <div className="terms">
                <label style={{ color: "#DC6628" }}>
                    <input type="checkbox" required />
                    Се согласувам со условите за користење на Notefy
                </label>
            </div>
            <button type="submit" className="btn btn-dark">РЕГИСТРИРАЈ СЕ</button>
        </form>
    );
};

const LoginRegisterForm = () => {
    const [activeTab, setActiveTab] = useState("login");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/materials");
        }
    }, []);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="login-register-wrapper">
            <div className="login-register-container" >
                <div className="logo-column">
                    <h3>Добредојдовте на</h3>
                    <img
                        className="logo-notefy-login"
                        src="./logo2.png"
                        alt="logo"
                        width={250} />
                </div>
                <div className="vertical-line" />
                <div className="login-register-column">
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === "login" ? "tab-active" : ""}`}
                            onClick={() => handleTabChange("login")}
                        >
                            НАЈАВА
                        </div>
                        <div
                            className={`tab ${activeTab === "register" ? "tab-active" : ""}`}
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

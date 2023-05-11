import axiosInstance from '../axiosConfig';


const AuthService = () => {
    const login = async (username, password) => {
        return await axiosInstance.post('/login', { username, password });
    }

    return {
        login
    }
}


export default AuthService;
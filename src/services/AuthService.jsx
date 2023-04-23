import axiosInstance from '../axiosConfig';


const AuthService = () => {
    const login = async (username, password) => {
        // return await axiosInstance.post('/login', { username, password });
        // TODO - Replace with your API call
    }

    return {
        login
    }
}


export default AuthService;
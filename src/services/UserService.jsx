import axiosInstance from '../axiosConfig';

const UserService = () => {

    const getDetailsForUser = (username) => {
        return axiosInstance.get('/api/users/${username}').then(response => response.data);
    }

    return {
        getDetailsForUser,
    }
}

export default UserService;

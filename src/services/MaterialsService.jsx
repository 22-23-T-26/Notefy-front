import axiosInstance from '../axiosConfig';


const MaterialsService = () => {
    const GetAll = async () => {
        return await axiosInstance.get('/posts');
    }

    return {
        GetAll
    }
}


export default MaterialsService;
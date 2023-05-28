import axiosInstance from '../axiosConfig';


const MaterialsService = () => {
    const GetAll = async () => {
        return await axiosInstance.get('/api/posts');
    }

    const CreateMaterial = async (formData) => {
        console.log(formData)
        return await axiosInstance.post('/api/posts/add', formData);
    }

    return {
        GetAll,
        CreateMaterial
    }
}


export default MaterialsService;
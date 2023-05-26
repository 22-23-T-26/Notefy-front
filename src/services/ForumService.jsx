import axiosInstance from '../axiosConfig';


const ForumService = (page) => {
    const getDiscussions = async (page) => {
        return await axiosInstance.get('/api/discussions?size=8&page=' + (page - 1));
    }

    return {
        getDiscussions
    }

}


export default ForumService;
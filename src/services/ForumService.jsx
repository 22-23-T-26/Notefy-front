import axiosInstance from '../axiosConfig';


const ForumService = (page) => {
    const getDiscussions = async (page) => {
        return await axiosInstance.get('/api/discussions?size=8&page=' + (page - 1));
    }
    const createDiscussion = async (discussion) => {
        return await axiosInstance.post('/api/discussions', discussion);
    }

    return {
        getDiscussions,
        createDiscussion
    }

}


export default ForumService;
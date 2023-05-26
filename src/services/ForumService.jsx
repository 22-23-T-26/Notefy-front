import axiosInstance from '../axiosConfig';


const ForumService = (page) => {
    const getDiscussions = async (page) => {
        return await axiosInstance.get('/api/discussions?size=8&page=' + (page - 1));
    }

    const getDiscussionById = async (id) => {
        return await axiosInstance.get('/api/discussions?discussionId=' + id);
    }
    const createDiscussion = async (discussion) => {
        return await axiosInstance.post('/api/discussions', discussion);
    }

    const addComment = async (discussionId, parentId, comment) => {
        return await axiosInstance.post(`/api/discussions/comment?discussionId=${discussionId}${parentId ? `&parenCommentId=${parentId}` : ""}`, {
            content: comment
        });
    }

    return {
        getDiscussions,
        createDiscussion,
        getDiscussionById,
        addComment
    }

}


export default ForumService;
import axiosInstance from '../axiosConfig';

const PostService = () => {

    const getPosts = () => {
        return axiosInstance.get("/api/posts").then(response => response.data);
    }

    const getPostById = (id) => {
        return axiosInstance.get('/api/posts/${id}').then(response => response.data);
    }

    const addPost = (post) => {
        return axiosInstance.post('/api/posts/add', post).then(response => response.data);
    }

    const findPostsByAuthor = (authorUsername) => {
        return axiosInstance.get('/api/posts/all-by-author', { params: { authorUsername } }).then(response => response.data);
    }

    return {
        getPosts,
        getPostById,
        addPost,
        findPostsByAuthor,
    }
}

export default PostService;

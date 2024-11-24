import axios from 'axios'
import { create } from 'zustand'

const usePostStore = create((set, get) => ({
    posts: [],
    currentPost: null,
    loading: false,
    createPost: async (body, token, user) => {
        const rs = await axios.post('http://localhost:8899/post', body, {
            headers: { Authorization: `Bearer ${token}` }
        })

        set(state => ({
            posts: [{ ...rs.data, user }, ...state.posts] // getAllPosts(token)ออก ตรง PostForm.jsx
        }))


        return rs.data
    },
    getAllPosts: async (token) => {
        set({ loading: true })
        const rs = await axios.get('http://localhost:8899/post', {
            headers: { Authorization: `Bearer ${token}` }
        })
        set({ posts: rs.data.posts, loading: false })
    },
    deletePost: async (token, id) => {
        console.log(id)
        const rs = await axios.delete(`http://localhost:8899/post/${id}`, {
            headers: { Authorization: `Bearer ${token}` }

        })
        set(state => ({
            posts: state.posts.filter(el => el.id !== id)
        }))
    },
    setCurrentPost: (post) => {
        set({ currentPost: post })
    },
    updatePost: async (body, token, id) => {
        const rs = await axios.put(`http://localhost:8899/post/${id}`, body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    createComment: async (body, token) => {
        const rs = await axios.post('http://localhost:8899/comment', body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    createLike: async (token, body) => {
        const rs = await axios.post('http://localhost:8899/like', body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },

    unLike: async (token, id) => {
        const rs = await axios.delete(`http://localhost:8899/like/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
}))

export default usePostStore
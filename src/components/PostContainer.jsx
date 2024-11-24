import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import useUserStore from '../Stores/userStore'
import usePostStore from '../Stores/PostStore'
import PostFormEdit from './PostFormEdit'


export default function PostContainer() {
    const posts = usePostStore(state => state.posts)
    // console.log(posts)
    const token = useUserStore(state => state.token)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const [isOpen, setIsOpen] = useState(false)
    const currentPost = usePostStore(state => state.currentPost)
    const setCurrentPost = usePostStore(state => state.setCurrentPost)
    useEffect(() => {
        getAllPosts(token)
    }, [])
    // console.log(posts)
    return (
        <>
            <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
                <CreatePost />

                {posts.map(el => (
                    <PostItem key={el.id} post={el} token={token} />
                ))}
            </div>
            {/* modal */}

            <dialog id="editform-modal" className="modal" onClose={() => setCurrentPost(null)}>
                <div className="modal-box">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={e => e.target.closest('dialog').close()}
                    >✕</button>
                    {currentPost && <PostFormEdit />}

                </div>
            </dialog>

        </>

    )
}
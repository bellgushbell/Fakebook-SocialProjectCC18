import React, { useState } from 'react'
import Avatar from './Avatar'
import { SendMessageIcon } from '../icons'
import useUserStore from '../Stores/userStore'
import usePostStore from '../Stores/PostStore'
import { toast } from 'react-toastify'

export default function CommentForm(props) {
    const [message, setMessage] = useState('')
    const { postId } = props
    const createComment = usePostStore(state => state.createComment)
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const hdlSendComment = async (e) => {
        console.log(message)
        try {
            //validation
            if (!message.trim()) {
                return toast.error('please fill comment')
            }
            const body = {
                message: message,
                postId: postId
            }
            console.log('token', token)
            await createComment(body, token)

            getAllPosts(token)
            setMessage('') //clear ค่า่

        } catch (err) {
            const errMsg = err.response?.data?.error || err.message
            toast.error(errMsg)
            console.log(errMsg)
        }
    }
    return (
        <div className='relative'>
            <div className="flex gap-3 items-start">
                <Avatar className='w-11 h-11 rounded-full' imgSrc={user.profileImage} />
                <textarea className='textarea w-full p-1 leading-5'
                    rows={message.split("\n").length}
                    placeholder={'comment by Andy Codecamp'}
                    value={message} onChange={e => setMessage(e.target.value)}>


                </textarea>

            </div>
            <button onClick={hdlSendComment} className="btn btn-circle btn-sm absolute bottom-1 right-2">
                <SendMessageIcon />
            </button>
        </div >
    )
}

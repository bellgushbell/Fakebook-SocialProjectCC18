import React, { useState } from 'react'
import Avatar from './Avatar'

import { PhotoIcon } from '../icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import useUserStore from '../Stores/userStore'
import usePostStore from '../Stores/PostStore'
import AddPicture from './AddPicture'

export default function PostFormEdit() {
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const createPost = usePostStore(state => state.createPost)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const currentPost = usePostStore(state => state.currentPost)
    const setCurrentPost = usePostStore(state => state.setCurrentPost)
    // console.log(currentPost)
    const updatePost = usePostStore(state => state.updatePost)

    const [message, setMessage] = useState(currentPost.message)
    const [addPic, setAddpic] = useState(false)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)



    const hdlChange = e => {
        setMessage(e.target.value)
    }
    const hdlEditPost = async e => {
        try {
            setLoading(true)
            const body = new FormData()
            body.append('message', message)
            if (file) {
                body.append('image', file)
            }
            //ถ้า multiple file : use for...of to body.append
            //use case หลายไฟล์
            //ex. state : files
            //for(let el of files){
            //body.append(el)
            //ใส่่ multiple ที่tag input 
            //}
            // for (let [key, value] of body.entries()) {
            //     console.log(key, value)
            // }


            // // const rs = await axios.post('http://localhost:8899/post', body, {
            // //     headers: { Authorization: `Bearer ${token}` }
            // // }) //move to PostStore.js

            // let newPost = await createPost(body, token)
            // // toast.success(JSON.stringify(newPost))
            // // console.log(newPost)
            // getAllPosts(token)

            // const rs = await createPost(body, token, user, currentPost.id) //เพิ่มuser เอาgetAllPosts(token)ออก ไม่อยากfetchใหม่ เลยใช้วิธีสร้างuserใหม่ใน PostStore
            await updatePost(body, token, currentPost.id) //แบบใหม่ อัพเดทได้
            getAllPosts(token)  //ฟังก์ชันจาก PostStore fetch data ใหม่อีกรอบ  ไม่ต้องกดรีเฟรซให้รูปขึ้น

            e.target.closest('dialog').close()

        } catch (err) {
            const errMsg = err.response?.data?.error || err.message
            console.log(errMsg)
            toast.error(errMsg)
        } finally {
            setLoading(false)
        }
    }




    return (
        <div className="flex flex-col gap-2">
            {loading && <span className="loading loading-spinner text-accent"></span>}
            <h3 className="text-xl text-center">Edi tPost</h3>
            <div className="divider mt-1 mb-0"></div>
            <div className="flex gap-2">
                <Avatar
                    className='w-11 h-11 rounded-full'
                    imgSrc={user.profileImage}
                />
                <div className="flex flex-col">
                    <div className="text-sm">{user.firstName} {user.lastName}</div>
                    <select className="select bg-slate-200 select-xs w-full max-w-xs"
                        defaultValue={'who can see?'}
                    >
                        <option disabled>who can see?</option>
                        <option>public</option>
                        <option>friends</option>
                    </select>
                </div>
            </div>
            <textarea className="textarea textarea-ghost"
                placeholder={`what do you think? ${user.firstName}`}
                value={message}
                onChange={hdlChange}
                rows={message.split("\n").length} //ปิดเลื่อนscroll bar ตรง post

            ></textarea >
            {/* Add Picture area */}
            {addPic && <AddPicture closeMe={() => setAddpic(false)} file={file} setFile={setFile} />}



            <div div className="flex border rounded-lg p-2 justify-between items-center" >
                <p>add with your post</p>
                <div className="flex gap-2"
                    onClick={() => setAddpic(prv => !prv)}
                >

                    <div
                        className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center
	active:scale-110">
                        <PhotoIcon className="w-7 h-7" />
                    </div>
                </div>
            </div >
            <button className={`btn btn-sm ${message.trim() ? 'btn-primary' : 'btn - disabled'}`} onClick={hdlEditPost}>Create Post</button>
        </div >
    )
}
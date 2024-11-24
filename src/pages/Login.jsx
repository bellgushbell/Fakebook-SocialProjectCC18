import React, { useState } from 'react'
import { FacebookTitle } from '../icons'
import axios from 'axios'
import Register from './Register'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../Stores/userStore'


export default function Login() {
    const login = useUserStore(state => state.login)
    const token = useUserStore(state => state.token)

    const navigate = useNavigate()
    const [input, setInput] = useState({
        identity: '',
        password: ''
    })

    const hdlChange = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))

    }

    const hdlLogin = async (e) => {
        try {
            e.preventDefault()
            console.log("asacsacsa")
            if (!(input.identity.trim() && input.password.trim())) {
                return toast.info("please fill all input")
            }
            // const rs = await axios.post("http://localhost:8899/auth/login", input) //ย้ายไปzustand
            let data = await login(input)
            // console.log(data)

            // toast.success("Login Success")
            // toast.success(JSON.stringify(data))
            navigate('/')

        } catch (err) {
            const errMsg = err?.response?.data?.error || err.message
            console.log(errMsg)
            toast.error(errMsg)
        }
    }

    return (
        <>


            <div className="h-[700px] pt-20 pb-28 bg-[#f2f3f4]">
                <div className='p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between'>
                    <div className="flex flex-col gap-4 mt-20 basis-3/5">

                        <FacebookTitle className="-ms-8 w-80" />



                        <h2 className='text-[30px] leading-8 -mt-6 w-[514px]'>Fakebook helps you connect and share with the prople in your life.</h2>
                        <p className='text-sm text-error'> ***This is not real facebook site</p>
                        {/* <p className='h-100'>{JSON.stringify(token)}</p> */}

                    </div>

                    <div className="flex flex-1">
                        <div className='card bg-base-100 w-full shadow-xl mt-8'>

                            <form onSubmit={hdlLogin}>
                                <div className='card-body gap-3 p-4'>
                                    <input type="text" placeholder="E-mail or Phone number"
                                        className="input input-bordered w-full"
                                        name="identity"
                                        value={input.identity}
                                        onChange={hdlChange} />
                                    <input type="password" placeholder="Password"
                                        className="input input-bordered w-full"
                                        name="password"
                                        value={input.password}
                                        onChange={hdlChange}
                                    />

                                    <button className="btn btn-primary text-xl">Log in</button>
                                    <p className='opacity-70 text-center cursor-pointer flex-grow-0'>Forgotten password</p>
                                    <div className="divider my-0"></div>

                                    <button
                                        type="button"
                                        className='btn btn-secondary text-lg text-white w-fit mx-auto'
                                        onClick={() => document.getElementById('register-modal').showModal()}
                                    >
                                        Create new account
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >



            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}


            <dialog id="register-modal" className="modal">
                <div className="modal-box">


                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={e => e.target.closest('dialog').close()}
                    >✕</button>

                    <Register />
                </div>
            </dialog>


        </>
    )

}

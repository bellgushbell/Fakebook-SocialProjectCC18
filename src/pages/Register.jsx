import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Register() {

    const [input, setInput] = useState({
        identity: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })

    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))

    }

    const hdlRegister = async (e) => {
        try {
            e.preventDefault()
            // console.log("asdasdca")

            //validation
            const rs = await axios.post("http://localhost:8899/auth/register", input)

            console.log(rs.data)
            setInput({
                identity: "",
                firstName: "",
                lastName: "",
                password: "",
                confirmPassword: ""
            })

            e.target.closest('dialog').close()
            toast.success("Register Success")

        } catch (err) {
            const errMsg = err?.response?.data?.error || err.message
            console.log(errMsg)
            toast.error(errMsg)
        }

    }
    return (
        <form onSubmit={hdlRegister} className='flex flex-col gap-3 p-4 pt-10'>
            <div className="flex gap2">
                <input type="text" name="firstName" value={input.firstName} onChange={hdlChange} placeholder='First name' className='input input-bordered w-full' />
                <input type="text" name="lastName" value={input.lastName} onChange={hdlChange} placeholder='Surname' className='input input-bordered w-full' />
            </div>
            <input type="text" name="identity" value={input.identity} onChange={hdlChange} placeholder='Email or phone number' className='input input-bordered w-full' />
            <input type="password" name="password" value={input.password} onChange={hdlChange} placeholder='New password' className='input input-bordered w-full' />
            <input type="password" name="confirmPassword" value={input.confirmPassword} onChange={hdlChange} placeholder='Confirm password' className='input input-bordered w-full' />
            <button className='btn btn-secondary text-xl text-white'>Sign Up</button>
        </form>
    )
}

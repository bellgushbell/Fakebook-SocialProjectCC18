import React from 'react'
import { FacebookLogo, GroupIcon, HomeIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon, ShopIcon } from '../icons'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import useUserStore from '../Stores/userStore'
import { useShallow } from 'zustand/shallow'


export default function Header() {


    // const logout = useUserStore(state => state.logout)
    // const user = useUserStore(state => state.user) //มีuser จากlogin แล้ว ดึงจากzustand
    const { user, logout } = useUserStore(
        useShallow(state => ({ user: state.user, logout: state.logout })))

    // const {user, logout} = useUserStore() *** No good ***

    // console.log(user)


    return (
        <header className='h-14 w-full fixed top-0 z-20 px-3 flex justify-between shadow-lg bg-white'>
            {/*Logo + input*/}
            <div className='flex flex-1 gap-2 items-center'>
                <FacebookLogo className="w-12" />
                <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full ">
                    <input type="text" className="grow" placeholder="Search" />




                    <SearchIcon />
                </label>
            </div>
            {/*center group-icons*/}
            <div className="flex gap-2 flex-1 justify-center ">
                <Link to="/" className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
                    <HomeIcon className='w12 h-12 ' />
                </Link>
                <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900 ">
                    <PlayIcon className='w12 h-12 pt-1' />
                </div>
                <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
                    <ShopIcon className='w12 h-11 pt-2' />
                </div>
                <Link to="/friends"
                    className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
                    <GroupIcon className='w12 h-13 pb-1' />
                </Link>
            </div>




            {/* Right menu */}
            <div className='flex gap-3 flex-1 justify-end'>
                <div className="avatar justify-center items-center">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <MenuIcon className='w-5' />
                    </div>
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <MessengerIcon className='w-8' />
                    </div>
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
                        <NotificationIcon className='w-7' />
                    </div>
                </div>


                <div className="dropdown dropdown-end mt-2">
                    <div tabIndex={0} role="button" className="">
                        {/* <div className="avatar">
                            <div className="w-10 h-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div> */}
                        <Avatar className="w-11 h-11 rounded-full"
                            imgSrc={user.profileImage}
                            menu={true}
                        />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>


            </div>
        </header >
    )
}

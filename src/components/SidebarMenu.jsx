import React from 'react'
import { AdsManager, BookmarkIcon, ClimateScienceCenter, ClockIcon, EventsIcon, FeedsIcon, FriendIcon, FundsIcon, GameIcon, GameVideo, GroupIcon, HomeIcon, MarketPlace, MemoriesIcon, MessengerIcon, MessengerKidIcon, MoreIcon, PagesIcon, PaymentIcon, PlayIcon, RecentActivityIcon, ReelIcon, SavedIcon, ShopIcon, VideoIcon } from '../icons';
import MenuItem from './MenuItem';
import Avatar from './Avatar';
import useUserStore from '../Stores/userStore';
export default function SidebarMenu() {
    const user = useUserStore(state => state.user)
    return (
        <div className='fixed top-14 h-full w-[350px] hide-scrollbar overflow-auto  flex flex-col gap-2 min-w-[220px] max-xl:w-[220px]'>
            {/* <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                Piriyapong Bunjusook
            </button> */}
            {/* <MenuItem icon={() => (
                <Avatar
                    imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-11 rounded-full"
                />)} text="Andy Codecamp" className='w-10' /> */}

            <MenuItem icon={Avatar} text={`${user.firstName} ${user.lastName}`}
                imgSrc={user.profileImage}
                className="w-11 h-11 rounded-full"
            />




            <MenuItem icon={FriendIcon} text="Friends" className='w-10' />

            <MenuItem icon={ClockIcon} text="Memories" className='w-10' />

            <MenuItem icon={BookmarkIcon} text="Saved" className='w-10' />

            <MenuItem icon={GroupIcon} text="Group" className='w-10 border border-gray-500 rounded-full' />

            <MenuItem icon={PlayIcon} text="Video" className='w-10' />

            <MenuItem icon={ShopIcon} text="Marketplace" className='w-10' />

            <MenuItem icon={MoreIcon} text="More" className='w-10 p-2 border border-gray-500 rounded-full' />
            <div className='divider'></div>


            {/* 
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <FriendIcon className='w-8' />
                Friends
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <MemoriesIcon className='w-8' />
                Memmories
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <SavedIcon className='w-8' />
                Saved
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <GroupIcon className='w-8' />
                Group
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <VideoIcon className='w-8' />
                Video
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <AdsManager className='w-8' />
                Ads Manager
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <ClimateScienceCenter className='w-8' />
                Climate Science Center
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <EventsIcon className='w-8' />
                Events
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <FeedsIcon className='w-8' />
                Feeds
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <FundsIcon className='w-8' />
                Fundraisers
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <GameVideo className='w-8' />
                Gaming Video
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <MarketPlace className='w-8' />
                MarketPlace
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <MessengerIcon className='w-8' />
                Messenger
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <MessengerKidIcon className='w-8' />
                Messenger Kids
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <PaymentIcon className='w-8' />
                Orders and payments
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <GameIcon className='w-8' />
                Play games
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <RecentActivityIcon className='w-8' />
                Recent ad activity
            </button>
            <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
                <ReelIcon className='w-8' />
                Reels
            </button> */}


        </div>
    )
}

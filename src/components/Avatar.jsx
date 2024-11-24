import React from 'react'
import defaultAvatar from "../assets/default-avatar.png"
import useUserStore from '../Stores/userStore'
import { DropDownArrow } from '../icons'
export default function Avatar(props) {
    const user = useUserStore(state => state.user)
    const { imgSrc, menu, ...restProps } = props
    // console.log(props)
    // console.log(restProps)

    return (
        <div className="avatar items-center cursor-pointer">
            <div {...restProps}>
                {/* <img src={user.profileImage ?? defaultAvatar} /> */}
                <img src={imgSrc ? imgSrc : defaultAvatar} />
                {/* อธิบายบรรทัดบนเขียนเต็ม */}
            </div>
            {menu &&
                <DropDownArrow className="absolute -bottom-2 -right-1 w-4" />
            }
        </div>
    )
}



import React from 'react'

export default function MenuItem(props) {
    const { icon: Icon, text, ...restProps } = props

    return (
        <button className='btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20'>
            <Icon {...restProps} />
            {text}
        </button>
    )
}

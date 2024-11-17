import React from 'react'
import { DragIcon } from '../assets'

const DragButton = () => {
    return (
        <div className='p-2 cursor-grab focus:cursor-grabbing'>
            <img src={ DragIcon } alt="" />
        </div>
    )
}

export default DragButton
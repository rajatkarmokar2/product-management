import React from 'react'
import { CrossIcon } from '../assets'

const CloseButton = ( { onClick } ) => {
    return (
        <div className='cursor-pointer p-1'>
            <img onClick={ onClick } className='size-6 opacity-40' src={ CrossIcon } alt='' />
        </div>
    )
}

export default CloseButton
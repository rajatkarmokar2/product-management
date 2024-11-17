import { InputAdornment } from '@mui/material'
import React from 'react'
import Input from './Input'
import { EditIcon } from '../assets'
import Button from './Button'

const ProductInput = ( { isChild,onEdit,value = '' } ) => {
    return (
        <Input
            className={ ` ` }
            value={ value }
            placeholder='Select Product'
            size="small"
            variant="outlined"
            slotProps={ {
                input: {
                    className: `!text-xs !shadow-input ${isChild ? '!rounded-full w-72' : "w-80"}`,
                    endAdornment: !isChild && <InputAdornment position="end">
                        <Button onClick={ onEdit } className='!rounded-none'>
                            <img className='size-5' src={ EditIcon } alt="edit-icon" />
                        </Button>
                    </InputAdornment>
                }
            } }
        />
    )
}

export default ProductInput
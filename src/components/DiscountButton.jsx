import { MenuItem } from '@mui/material'
import React,{ useState } from 'react'
import Button from './Button'
import Input from './Input'
import Select from './Select'

const DiscountButton = ( { isChild } ) => {
    const discountOffOptions = [ '% off','flat off' ]
    const [ discount,setDiscount ] = useState( false )
    const [ discountOff,setDiscountOff ] = useState( '' )
    const toggleDiscount = () => {
        setDiscount( ps => !ps )
    }
    const onChangeDiscountOff = ( e ) => {
        setDiscountOff( e.target.value )
    }
    return (
        <div className='w-40'>
            {
                discount ?
                    <div className='flex items-center gap-1 w-full'>
                        <Input
                            className='flex-1'
                            placeholder='0'
                            type='number'
                            size="small"
                            variant="outlined"
                            slotProps={ {
                                input: {
                                    className: `!text-xs shadow-input ${isChild ? '!rounded-full overflow-hidden' : ''}`,
                                }
                            } }
                        />
                        <Select
                            className={ `flex-1 !text-xs ${isChild ? '!rounded-full overflow-hidden' : ''}` }
                            placeholder='%'
                            size="small"
                            value={ discountOff }
                            onChange={ onChangeDiscountOff }
                            variant="outlined"
                        >
                            { discountOffOptions.map( ( item ) => (
                                <MenuItem key={ item } value={ item }>{ item }</MenuItem>
                            ) ) }
                        </Select>
                        {/* <CloseButton onClick={ toggleDiscount } /> */}
                    </div>
                    :
                    <Button className='w-full' onClick={ toggleDiscount } variant='contained' color='success' size='small'  >Add Discount</Button>
            }
        </div>
    )
}

export default DiscountButton
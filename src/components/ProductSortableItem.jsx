import { Collapse } from '@mui/material'
import React,{ memo,useState } from 'react'
import { SortableItem,SortableKnob } from 'react-easy-sort'
import { CrossIcon } from '../assets'
import { useProductContext } from '../contexts/ProductContext'
import DiscountButton from './DiscountButton'
import DragButton from './DragButton'
import ProductInput from './ProductInput'
import SelectProductModal from './SelectProductModal'
import VariantSortableList from './VariantSortableList'

const ProductSortableItem = ( { onSortChild,product,index } ) => {
    const [ collapse,setCollapse ] = useState( false )
    const [ isOpen,setIsOpen ] = useState( false )
    const { products,updateProduct,deleteProduct } = useProductContext()
    const toggleCollapse = () => {
        setCollapse( ps => !ps )
    }
    const openSelectModal = () => setIsOpen( true )
    const closeSelectModal = () => setIsOpen( false )

    const onSubmit = ( product ) => {
        updateProduct( product.id,product )
        closeSelectModal()
    }

    return (
        <SortableItem key={ product.id }>
            <div className="border-b py-3 last:border-b-0">
                <div className="flex gap-3 items-center">
                    <div>
                        <SortableKnob>
                            <div className="flex gap-2 items-center">
                                <DragButton />
                                <span>{ index + 1 }.</span>
                            </div>
                        </SortableKnob>
                    </div>
                    <div>
                        <ProductInput value={ product.title } onEdit={ openSelectModal } />
                    </div>
                    <div>
                        <DiscountButton />
                    </div>
                    <div className={ `${products.length <= 1 && 'opacity-0 pointer-events-none'}` }>
                        <button className='p-1 py-2' onClick={ () => deleteProduct( product.id ) }>
                            <img className='size-3 opacity-40' src={ CrossIcon } alt="" />
                        </button>
                    </div>
                </div>
                { product.variants.length > 0 && <div className="text-end">
                    <button onClick={ toggleCollapse } className="text-xs underline text-blue-500">
                        { collapse ? 'Hide' : 'Show' } variants
                    </button>
                </div> }
                <Collapse appear={ true } in={ collapse }>
                    <VariantSortableList product={ product } onSortEnd={ onSortChild } />
                </Collapse>


                { isOpen && <SelectProductModal onSubmit={ onSubmit } open={ isOpen } onClose={ closeSelectModal } /> }

            </div>
        </SortableItem>
    )
}

export default memo( ProductSortableItem )
import React,{ memo } from 'react'
import ProductInput from './ProductInput'
import DiscountButton from './DiscountButton'
import DragButton from './DragButton'
import SortableList,{ SortableItem,SortableKnob } from 'react-easy-sort'
import { CrossIcon } from '../assets'
import { useProductContext } from '../contexts/ProductContext'

const VariantSortableList = ( { product,onSortEnd } ) => {
    const { deleteVariant } = useProductContext()

    return (
        <SortableList
            onSortEnd={ ( oldIndex,newIndex ) =>
                onSortEnd( product.id,oldIndex,newIndex )
            }
            draggedItemClassName="dragged"
        >
            <div className="flex flex-col gap-2 py-3 items-end">
                { product.variants.map( ( variant,index ) => (
                    <SortableItem key={ variant.title + variant.id }>
                        <div className="flex gap-3 items-center">
                            <div>
                                <SortableKnob>
                                    <div>
                                        <DragButton />
                                    </div>
                                </SortableKnob>
                            </div>
                            <div>
                                <ProductInput value={ variant.title } isChild />
                            </div>
                            <div>
                                <DiscountButton isChild />
                            </div>
                            <div className={ `${product.variants.length <= 1 && 'opacity-0 pointer-events-none'}` }>
                                <button className='p-1 py-2' onClick={ () => deleteVariant( product.id,variant.id ) }>
                                    <img className='size-3 opacity-40' src={ CrossIcon } alt="" />
                                </button>
                            </div>
                        </div>
                    </SortableItem>
                ) ) }
            </div>
        </SortableList>
    )
}

export default memo( VariantSortableList )
import { useState } from 'react'

const generateProduct = () => {
    const id = String( Math.random() * 10000 )
    return {
        "id": id,
        "title": "",
        "variants": [],
        "image": null
    }
}

const useCrudProduct = () => {
    const [ products,setProducts ] = useState( [ generateProduct() ] )

    const createProduct = () => {
        setProducts( ps => [ ...ps,generateProduct() ] )
    }
    const updateProduct = ( id,data ) => {
        data=data.map( ( product ) => ( {
            ...product,
            id: ( Math.round( Math.random() * 1000 ) ).toString()
        } ) )
        let updatedProducts = [ ...products ]
        const findIndex = updatedProducts.findIndex( ( product ) => product.id === id )
        updatedProducts.splice( findIndex,1,...data )
        setProducts( updatedProducts )
    }
    const deleteProduct = ( id ) => {
        const updatedProducts = products.filter( ( product ) => product.id !== id )
        setProducts( updatedProducts )
    }
    const deleteVariant = ( parentId,variantId ) => {
        const updatedProducts = products.map( ( product ) =>
            product.id === parentId
                ? { ...product,variants: product.variants.filter( ( variant ) => variant.id !== variantId ) }
                : product )
        // .filter( ( product ) => product.id !== id )
        setProducts( updatedProducts )
    }

    return {
        products,setProducts,
        createProduct,updateProduct,
        deleteProduct,deleteVariant
    }
}

export default useCrudProduct
import { createContext,useContext,useState } from 'react'
import useCrudProduct from '../hooks/useCrudProduct'

const ProductContext = createContext()

export const useProductContext = () => useContext( ProductContext )

export const ProductProvider = ( { children } ) => {
    const productMaster = useCrudProduct()
    return (
        <ProductContext.Provider value={ productMaster }>{ children }</ProductContext.Provider>
    )
}
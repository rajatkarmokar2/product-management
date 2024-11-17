import { useEffect, useState } from "react"
import axios from "axios"
import { apiUrl } from "./config"

export const useGetProducts = () => {
    const [ data,setData ] = useState( [] )
    const [ loading,setLoading ] = useState( false )
    const [ error,setError ] = useState( false )
    useEffect( () => {
        setLoading( true )
        axios.request( {
            url: `${apiUrl}/task/products/search?search=Hat&page=1&limit=1`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': '6b4d9b6f-8b6d-4a0c-9b6d-4a0c9b6d4a0c'
            }
        } )
            .then( res => {
                setData( res.data )
            } )
            .catch( err => {
                setError( err.message )
            } )
            .finally( () => {
                setLoading( false )
            } )
    },[] )
    return { data,loading,error }
}
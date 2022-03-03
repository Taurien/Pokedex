import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = () => {

    const [ fetchedData, setFetchedData ] = useState(null);
    const [ isloading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    const triggerFetch = (endpoint, id_OR_name) => {

        setFetchedData(null)
        setIsLoading(true)
        
        axios.get(`https://pokeapi.co/api/v2/${endpoint}/${id_OR_name}`)
            .then(({data}) => {
                setFetchedData(data)
                })
            .catch(err => {
                console.log(err)
                setError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    return { triggerFetch, fetchedData, isloading, error }
}
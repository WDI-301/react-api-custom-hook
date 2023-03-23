import React, {useState} from 'react'

const useFuncAPI = (route, id) => {
    const [data, setData] = useState('')
    const baseUrl = 'https://jsonplaceholder.typicode.com'

    const fetchData = () => {
        fetch(`${baseUrl}/${route}/${id}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error))
        return data
    }

    // async/await
    // const fetchData = async () => {
        // const response = await fetch(`${baseUrl}/${route}/${id}`)
        // const responseJSON = await response.json()
        // setData(responseJSON)
        // return data
    // }
    

    return fetchData
}

export default useFuncAPI
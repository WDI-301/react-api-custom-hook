import React, {useEffect, useState} from 'react'

const useAPI = (route, id) => {

  const [data, setData] = useState('hello')

  //fetch data
  useEffect(() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    fetch(`${baseUrl}/${route}/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
 
    // async/await
    // const fetchData = async () => {
    // const response = await fetch(`${baseUrl}/${route}/${id}`)
    // const responseJSON = await response.json()
    // console.log(responseJSON)
    // }
    // fetchData()

  }, [route, id])

  return data
}

export default useAPI
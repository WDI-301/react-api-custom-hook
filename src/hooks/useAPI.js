import React, {useEffect, useState} from 'react'

const useAPI = (route, id) => {

  const [data, setData] = useState('')

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

  switch (route) {
    case 'users':
      let newData = {
        ...data
      }
      if (newData.title === undefined) {
        newData.title = "No Data"
      }
      return newData

    case 'todos':
      
      return {
        name: 'Empty',
        title: data.title
      }

    case 'posts':
      return {
        name: 'No Name',
        ...data
      }

    default:
        return data
  }

  // return data
}

export default useAPI
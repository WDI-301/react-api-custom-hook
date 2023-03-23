import React, {useEffect, useState} from 'react'

const useAPI = (route, id) => {
  //fetch data
  useEffect(() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    fetch(`${baseUrl}/${route}/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
 
    // async/await
    // const fetchData = async () => {
    // const response = await fetch(`${baseUrl}/${route}/${id}`)
    // const responseJSON = await response.json()
    // console.log(responseJSON)
    // }
    // fetchData()

}, [route, id])

  


  return (
    <div>useAPI</div>
  )
}

export default useAPI
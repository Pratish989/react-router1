import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/Pratish989/followers")
        .then( response => response.json)
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
    
  return (
    <div>Github Followers : {data.followers} </div>
  )
}

export default Github
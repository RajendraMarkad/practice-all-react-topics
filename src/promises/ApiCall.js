import axios from "axios";
import React, { useEffect, useState } from 'react'

const ApiCall = () =>  {
    const [user, setUser] = useState();
    
    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
    .then(response=> setUser(response.data.users))
    },[])

  return (
    <div>
        <ol>
            {
                user?.map((item)=>{
                     console.log(item.firstName);
                    return <li key={item.id}>{item.firstName}</li>
                    }
                )
            }
        </ol>
    </div>
  )
}

export default ApiCall;
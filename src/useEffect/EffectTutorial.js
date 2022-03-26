import React, {useEffect, useState} from 'react'
import axios from 'axios'



function EffectTutorial() {
    const [data, setData] = useState('')
    useEffect(()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            setData(res.data[0].email)
        })
    }, []);
  return (
    <div>
        <h1>EffectTutorial</h1>
        <p>UseEffect hook is a function that will be called whenever the page rerenders</p>
        <p>{data}</p>
        </div>
  )
}

export default EffectTutorial
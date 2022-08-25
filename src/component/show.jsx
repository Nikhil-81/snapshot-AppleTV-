import {useParams} from "react-router-dom"
import "./show/show.css"
import { useEffect,useState } from "react"
import Hero_back from "./show/hero"
function getdata(id){
    return fetch(`http://localhost:8000/data/${id}`).then(res=>(res.json())).catch(err=>console.Console.log(err))
}
export default function Show(){
    const [data,setdata]=useState({})
    const prams=useParams()
    console.log(prams)
    useEffect(()=>{
        getdata(prams.id).then(res=>(setdata(res))).catch(err=>console.log(err))
    },[])
    
    console.log(data)
    return(
        <div>
            <Hero_back data={data}/>
        </div>
    )
}
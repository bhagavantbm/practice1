import { useState } from "react"

export const UseStatehook=()=>{
    let [data,setdata]=useState("enter here")
    return <>
    <center>
    <input type="text" onChange={(g)=>{
        setdata(g.target.value
)
    }}/>
    <h1>    {data}
    </h1>


    </center>
   
    
    </>
}
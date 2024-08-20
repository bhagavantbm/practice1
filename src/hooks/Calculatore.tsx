import { Add } from "@mui/icons-material"
import { useState } from "react"

export const Calculatore=()=>{
    const [num11,setnum1]=useState("")
    const [num22,setnum2]=useState("")
    let [result,setresult]=useState("")


     let num1=parseInt(num11)
     let num2=parseInt(num22)
     let resukr=parseInt(result)


    return <>
    <center>
    <input type="number" onChange={(g)=>{
        setnum1(g.target.value)
    }}/>
    <h1>    {num1}
    </h1>
    <input type="number" onChange={(g)=>{
        setnum2(g.target.value)
    }}/>
    <h1>    {num2}
    </h1>

    </center>
   
   
    </>
}
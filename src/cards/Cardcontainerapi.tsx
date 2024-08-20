import { Grid } from "@mui/material"
import { Mycard } from "./Mycards"
import { useEffect, useState } from "react"
import { apicaller } from "../api/api"



export const CardContainerapi=()=>{
    let [apidata,setApidata]=useState([])
    useEffect(()=>{
        (async()=>{
        setApidata(await apicaller())
        })()

    },[])
    return <>
    <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
{apidata.map((a:any)=>{
        return <Mycard img={a.image}/>
    })}


</Grid>


</>

}
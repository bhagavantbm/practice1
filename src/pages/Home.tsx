
import { CardContainer } from "../cards/CardContainer"
import { Button } from "../components/Botton"
import { Mycarosal } from "../components/carosal/Mycarosal"
import { MuiButton } from "../components/Mui/MuiButton"
import { CustomStyle } from "../components/styles/CustomStyle"
import "../components/styles/style.css"


export const Home=()=>{
    return <>
     
    <h1 className="pqrs">Home </h1>
    <Mycarosal/>
    <Button/>
    <CardContainer/>
    <CardContainer/>

    <CardContainer/>
    <CardContainer/>

   
  
</>
}
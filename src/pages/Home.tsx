
import { CardContainer } from "../cards/CardContainer"
import { CardContainerapi } from "../cards/Cardcontainerapi"
import { Button } from "../components/Botton"
import { Mycarosal } from "../components/carosal/Mycarosal"
import { MuiButton } from "../components/Mui/MuiButton"
import { CustomStyle } from "../components/styles/CustomStyle"
import "../components/styles/style.css"
import { Mynavbar } from "../navbar/Mynavbar"


export const Home=()=>{
    return <>
         <Mynavbar/>
    <h1 className="pqrs">Home </h1>
    <Mycarosal/>
    <Button/>
    <br />
    <h1>api card container</h1>
    <CardContainerapi/>
    <br />
    <CardContainer/>
    <CardContainer/>

    <CardContainer/>
    <CardContainer/>

   
  
</>
}
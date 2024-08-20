import { Grid } from "@mui/material"
import { Mycard } from "./Mycards"
import img1 from "../../src/static/images/1.avif"
import img2 from "../../src/static/images/1.jpeg"
import img3 from "../../src/static/images/2.jpeg"
import img4 from "../../src/static/images/3.jpg"


export const CardContainer=()=>{
    return <>
    <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
<Mycard img={img1}/>
<Mycard img={img2}/>
<Mycard img={img3}/>
<Mycard img={img4}/>
</Grid>


</>

}
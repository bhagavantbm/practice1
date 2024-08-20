import { Grid, Paper, TextField,Button} from "@mui/material"
import "./login.css"
import { Link } from "react-router-dom"

export const Register=()=>{
    return <>
 
    <div className="container1">

    <Paper style={{padding:'100px'}}>

       
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>Login page</h1>
    <br />
    <TextField id="outlined-basic" label="email" variant="outlined" />
    <br />
    <TextField id="outlined-basic" label="password" variant="outlined" />
<br />
<TextField id="outlined-basic" label="Name" variant="outlined" />
<br />
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
<Button variant="outlined">Register</Button>
<Link to ={'/Login'}>
<Button variant="contained">Login</Button></Link>
</Grid>




</Grid>
</Paper>  
    </div>
    
    </>
}
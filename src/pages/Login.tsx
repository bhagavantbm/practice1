import { Grid, Paper, TextField,Button} from "@mui/material"
import "./login.css"
import { Link } from "react-router-dom"

export const Login=()=>{
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
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
<Link to={'/register'}>
<Button variant="outlined">Register</Button></Link>
<Link to={'/Home'}>
<Button variant="contained">Login</Button></Link>
</Grid>




</Grid>
</Paper>  
    </div>
    
    </>
}
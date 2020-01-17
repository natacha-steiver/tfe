import React,{Component} from 'react'
import {register,login} from '../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import Theorie from '../backend/crud/theorie/index'
import Menu from '../menu'
//ajout nom dans DB ok
//
//



      import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
      import { Face, Fingerprint } from '@material-ui/icons'
      const styles = theme => ({
          margin: {
              margin: theme.spacing(2),

          },
          padding: {
              padding: theme.spacing(),


              left:"50%",
              marginBottom:"15%"

          },
          conteneur:{
            position:"relative",
            top:"61rem",
          left:"10%"
          },
          ressource:{
            position:"relative",
            top:"-10rem",
            left:"22rem"
          }
      });

class Login extends Component{



 onSubmit(e){
      e.preventDefault()
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
    login(email,password)

    }



render(){
   const { classes } = this.props;
    return (


        <div id="login">



        <form  onSubmit={this.onSubmit} >
        {
          /*

          <label htmlFor="">email:</label>
          <input type="text" name="email"  id="email" placeholder="email"/>

          <label htmlFor="">password:</label>
          <input type="text" name="password"  id="password" placeholder="password"/>

           */
        }

        <Grid container spacing={2} alignItems="flex-end" direction="row" className={classes.conteneur}>

        <Grid item xs={4}>


                <Paper className={classes.padding} >
                    <div className={classes.margin}>


                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item >
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="email" name="email" label="Username" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="password" name="password" label="Password" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox
                                        color="primary"
                                    />
                                } label="Remember me" />
                            </Grid>
                            <Grid item>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }} type="submit" onClick={()=>{login(email,password)}}>Login</Button>

                        </Grid>

                    </div>
                </Paper>



        </Grid>

<Grid item xs={8}>

<section className={classes.ressource}>
<h3>Ressources</h3>
<p>Pour accèder aux ressources théoriques et pratiques, vous devez vous connecter.</p>
</section>
</Grid>
        </Grid>






        </form>


    </div>
    );


}}


      export default withStyles(styles)(Login);

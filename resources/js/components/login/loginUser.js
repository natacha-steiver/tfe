import React,{Component} from 'react'
import {register} from '../../ajax'
import {loginUser} from '../../redux/store'

import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import Theorie from '../backend/crud/theorie/index'
import Menu from '../menu'
import '../../../assets/sass/login.min.css'

//ajout nom dans DB ok
//
//

import PersonIcon from '@material-ui/icons/Person';

      import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import LockSharpIcon from '@material-ui/icons/LockSharp';
      const styles = theme => ({
          margin: {
              borderBox:"box-sizing"

          },
          padding: {
              padding: theme.spacing(),


              left:"50%",
              marginBottom:"15%"

          },
          conteneur:{
            position:"relative",
            paddingLeft:"10%"

          },
          ressource:{
            position:"relative",
            top:"-10rem",
            paddingLeft:"10%"
          }
      });

class LoginUser extends Component{



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


<h3 className="titre">Se connecter</h3>
        <form  onSubmit={this.onSubmit} >
        {
          /*

          <label htmlFor="">email:</label>
          <input type="text" name="email"  id="email" placeholder="email"/>

          <label htmlFor="">password:</label>
          <input type="text" name="password"  id="password" placeholder="password"/>

           */
        }

        <Grid container  alignItems="flex-end" direction="row" className={classes.conteneur}>

        <Grid item xs={12} lg={4}>


                <Paper className={classes.padding} >
                    <div className={classes.margin}>






                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item >
                                <PersonIcon />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="email" name="email" label="Email" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <LockSharpIcon/>
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="password" name="password" label="Mot de passe" type="password" fullWidth required />
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
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }} type="submit" onClick={()=>{loginUser(email,password)}}>Login</Button>

                        </Grid>

                    </div>
                </Paper>



        </Grid>

<Grid item xs={12} lg={8}>

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


      export default withStyles(styles)(LoginUser);

import React,{Component,useState } from 'react'
//import {getList,storeSite} from './ajax'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { HashRouter, Route, NavLink,Link } from 'react-router-dom';


import Solution from '../backend/crud/solution/index'
import Theorie from '../backend/crud/theorie/index'
import Exercice from '../backend/crud/exercice/index'
import Langage from '../backend/crud/langage/index'


import '../../../assets/sass/app.min.css'



import Register from '../register/index'


const routes = [


  { path: '/solutions', component:Solution },
  { path: '/exercices', component:Exercice },
  { path: '/theories', component:Theorie},
  { path: '/langages', component:Langage},
  { path: '/register', component:Register },


  { path: '/admin#'}


];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Admin(){




  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className="main">


    <HashRouter>
    <div>
    <Paper className={classes.root}>


    <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    centered
    >
    <Tab label="admin" component={Link} to="/admin#" />
    <Tab label="solutions" component={Link} to="/solutions" />

    <Tab label="theories" component={Link} to="/theories" />

    <Tab label="exercices" component={Link} to="/exercices" />
    <Tab label="langages" component={Link} to="/langages" />


    <Tab label="gestion des administrateurs" component={Link} to="/register" />






    </Tabs>
    </Paper>











    <section>
    {routes.map(route => <Route {...route} key={route.path} />)}
    </section>
    </div>
    </HashRouter>

    </div>
  );



}

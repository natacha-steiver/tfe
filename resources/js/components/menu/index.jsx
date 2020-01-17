import React, { useState,  forwardRef  } from 'react';
import ReactDOM from "react-dom";



import { Component, useRef } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';

import {getMenu} from '../../ajax';
import Test from '../test/index';
import '../../../assets/sass/app.min.css'
import Login from '../login/index';
import TheorieListe from '../frontend/apprendre/theorie/menu';
import ExerciceListe from '../frontend/apprendre/pratique/menu';
import Admin from '../admin/index';
import CreateExercice from '../container/createExercice';
import ExerciceList from '../container/ExerciceList';




import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),


  },
  iconMenu: {
    fontSize:50


  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section id="contentMain">




    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor:"#fff"}}>
          <IconButton
            color="default"

            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon className={clsx(classes.iconMenu)}/>
          </IconButton>

          <aside>

                    <h1>CODE<span>GAME</span></h1>



          <button>Se connecter</button>
          <button>s'inscrire</button>
          </aside>

        </Toolbar>
      </AppBar>

      <Router>
  <div>
  <h2 id="titrePrincipal">Conçevez votre propre app</h2>

  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>

                           <Link to={ `/login` }>
                           login
     </Link>
     <Link to={ `/admin` }>
     login
</Link>


                           <Link to={ `/apprendre` }>
                           apprendre
                           </Link>
                           <Link to={ `/entrainement` }>
                           s'entrainer
                           </Link>


                           <li>      <Link to={ `/exercices` }>
                                 exercices
                                 </Link>
                                 </li>


    </List>
  </Drawer>


              <Switch>


              <Route  path="/admin">
                <Admin/>
  </Route>
                <Route  path="/login">
                  <Login/>
  </Route>


                <Route path="/apprendre">
                  <TheorieListe />
                </Route>
                <Route path="/entrainement">
                  <ExerciceListe />
                </Route>

                <Route path="/exercices">

                <CreateExercice/>
                 <ExerciceList />
                </Route>


                <Route path="/apprendre">
                  <TheorieListe />
                </Route>
                <Route path="/entrainement">
                  <ExerciceListe />
                </Route>




              </Switch>
  </div>

          </Router>



    </div>
        </section>
  );
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SolutionExList from '../../../container/SolutionExList'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';
import ExerciceFront from './index';
import { fetchAllExercices } from '../../../../redux/actions';

import { fetchAllSolutions } from '../../../../redux/actions';

import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
    >
    {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    wordBreak:"break-all",

    position:'relative',
    top:"51rem",
    listStylePuce:"none"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth:"11rem",

  },
  card: {
   width:"15em",
   maxWidth: 345,

 },
 media: {
   height: 140,
 },
}));

function ExerciceListe({ exercices,onFetch,onFetchSolution,solutions,langages}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [langageNew, setLangage] = useState('');
  const [titreNew, setTitre] = useState('');
    const [visibleNew, setVisible] = useState(true);
    const [buttonNew, setButton] = useState('show/hide Katas');

  {/* récupérer redux langages!*/}
  //const langages=[{langage:"html"},{langage:"javascript"},{langage:"react"},{langage:"css"},{langage:"python"}]



  return (
    <div>
    <button onClick={()=>{setVisible(!visibleNew)}} style={{position:"absolute",top:"65em",right:"1em",zIndex:'99'}}>{buttonNew}</button>
    <div className={classes.root}>



  {visibleNew &&
    <Tabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    className={classes.tabs}
    >
    {langages.map((ex,index)=>{
      return(
        <li key={ex.index}>







        <Tab label={ex.langage} {...a11yProps(index)}          onClick={()=>{  setLangage(ex.langage);}} style={{cursor:"pointer"}} />





        </li>





      );
    })}
    </Tabs>
  }
    <Router >

    <div >
    {
      visibleNew &&
      <div>
      <h3 style={{marginLeft:"3em"}}>Liste des exercices</h3>

      {
        exercices.filter(exercice=>exercice.type==langageNew ).map((exercice,index )=> {
          return (

            <div style={{display:"inline-block"}}>







          <div style={{display:"inline-block",width:"50%",top:"1em",marginLeft:"5rem",marginBottom:"3em"}}>


    <Link to={ `/exercice/${exercice._id}` } style={{height:"27em"}}>
            <Card className={classes.card}>
                <CardActionArea style={{height:"27em"}}>
                  <CardMedia
                    className={classes.media}
                    image="./images/exercices.png"
                    title={exercice.titre}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    <li >

                    {exercice.titre}

                    </li>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {exercice.ennonce.substring(1,100)} ...
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>


            </Link>

      </div>

      </div>
      );
      })}

      </div>
    }
{
  exercices.filter(exercice=>exercice.type==langageNew ).map((exercice,index )=> {

    return (

          <Switch >


          <Route exact path={ `/exercice/${exercice._id}` }   >
          <ExerciceFront  exercice={exercice } key={exercice._id}   onFetchSolution={  onFetchSolution} solutions={solutions}/>
          </Route>




          </Switch>


        );
      })}


      </div>


      </Router>
      </div>

      </div>
    );
  }


  const mapStateToProps = state => {

    return {
      exercices: state.exercices,
      solutions:state.solutions,
      langages:state.langages


    };
  };


  const mapDispatchToProps = dispatch => {

    return {


      onFetch:()=>{
        dispatch(fetchAllExercices())

      },
      onFetchSolution:()=>{
        dispatch(fetchAllSolutions())

      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExerciceListe);

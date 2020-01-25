import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



import { connect } from 'react-redux';
import ExerciceFront from './index';
import { fetchAllExercices } from '../../../../redux/actions';


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
    height: 224,
    position:'relative',
    top:"51rem",
    listStylePuce:"none"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function ExerciceListe({ exercices,onFetch}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [langageNew, setLangage] = useState('');
  const [titreNew, setTitre] = useState('');
  {/* récupérer redux langages!*/}
  const langages=[{langage:"html"},{langage:"javascript"},{langage:"react"},{langage:"css"},{langage:"python"}]

  return (
    <div className={classes.root}>



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
    <Router >

    <div >


    {
      exercices.filter(exercice=>exercice.type==langageNew ).map((exercice,index )=> {
        return (

          <div style={{height:"3em"}}>







        <div style={{display:"inline-block",width:"50%",top:"1em",marginLeft:"30%"}}>
          <li >
          <Link to={ `/exercice/${exercice._id}` }>
          {exercice.titre}
          </Link>
          </li>

    </div>





          <Switch>


          <Route exact path={ `/exercice/${exercice._id}` }   >
          <ExerciceFront  exercice={exercice } key={exercice._id} />
          </Route>




          </Switch>


          </div>
        );
      })}


      </div>


      </Router>
      </div>
    );
  }


  const mapStateToProps = state => {

    return {
      exercices: state.exercices

    };
  };


  const mapDispatchToProps = dispatch => {

    return {


      onFetch:()=>{
        dispatch(fetchAllExercices())

      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExerciceListe);

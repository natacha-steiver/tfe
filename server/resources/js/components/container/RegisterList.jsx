// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Authentification from '../login/authentification';


function RegisterList({authentifications }) {

  return (
    <div>
      {
        authentifications.map((authentification,index )=> {
        return (

          <Authentification authentification={ authentification }  key={authentification._id} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    authentifications: state.authentifications
  };
};



export default connect(
  mapStateToProps

)(RegisterList);

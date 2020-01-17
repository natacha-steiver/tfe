

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Test from "../../../test"

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px',
  position:"relative",
  top:"61rem"
};
window.store=store;
export default ({ exercice: { titre,ennonce,type, _id } }) => {
  //console.log(exercice)

  return (
    <div style={ styles }>
      <h2>{ titre }</h2>
      <p>{ ennonce}</p>

<p>{type}</p>

<Test/>
    </div>
  );
};

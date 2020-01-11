

import React, { useState }  from 'react';
import store from "../../../../redux/store"


const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ exercice:{ type, ennonce,titre, _id } }) => {
  //console.log(exercice)

  return (
    <div style={ styles }>
      <h2>{ titre } <span>{type}</span></h2>
      <p>{ ennonce }</p>
  



    </div>
  );
};



import React, { useState }  from 'react';
import store from "../../redux/store"


const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ authentification: { email, password, _id } }) => {
  console.log(authentification)


  return (
    <div style={ styles }>
      <h2>{ email }</h2>
      <p>{ password }</p>






    </div>
  );
};



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
export default ({ theorie: { titre,texte,image,video,langage, _id } }) => {
  //console.log(exercice)

  return (
    <div style={ styles }>
    <h2>{ titre }</h2>
    <p>{ texte }</p>
    <img src={`http://localhost:3333/images/${image.clientName}`} alt={image}/>
            <iframe src={`http://localhost:3333/videos/${video.clientName}`}frameBorder="0"></iframe>
    <p>{ langage}</p>



    </div>
  );
};

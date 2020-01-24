

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
console.log(image._files.length)



  return (
    <div style={ styles }>
    <h2>{ titre }</h2>
    <p>{ texte }</p>


    <p>{ langage}</p>


    {

      video._files.map((el,i)=>{
        return(
          <li key={i}>
          <iframe src={`http://localhost:3333/videos/${el.clientName}`}frameBorder="0"></iframe>
</li>
        )

      })
    }

{

  image._files.map((el,i)=>{
    return(
      <li key={i}><img src={`http://localhost:3333/images/${el.clientName}`} alt={image}/></li>
    )

  })
}

    </div>
  );
};



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


    <p>{ langage}</p>


    {

      video != null ? video._files && video._files.map((el,i)=>{
        return(
          <li key={i}>
          <iframe src={`http://localhost:3333/videos/${el.clientName}`}frameBorder="0"></iframe>
            </li>
          )

        }): console.log("loop video doesn't exist")
      }
      {
        video != null  ?
        !video._files &&



        <iframe src={`http://localhost:3333/videos/${video.clientName}`}frameBorder="0"></iframe>



          : console.log("video doesn't exist")

        }

        {

          image != null ?
          image._files &&
          image._files.map((el,i)=>{
            return(
              <li key={i}><img src={`http://localhost:3333/images/${el.clientName}`} alt={image}/></li>
              )

            }):console.log("image doesn't exist")

          }

          {

            image !=null  ?
            !image._files &&

            <img src={`http://localhost:3333/images/${image.clientName}`} alt={image}/>


              :console.log("image loop doesn't exist")
            }




    </div>
  );
};

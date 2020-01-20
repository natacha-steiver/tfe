

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import { UPDATE_LANGAGE } from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ langage: { langage,image, _id }, onDelete,onUpdate }) => {
  console.log(langage)

  const [langageNew, setLangage] = useState('');
  const [imageNew, setImage] = useState('');
  return (
    <div style={ styles }>
      <h2>{ langage }</h2>
      <p>{ image}</p>

      <form >
    <label htmlFor="">Langage:</label>
    <input type="text" name="langage"  placeholder={langage}  onChange={event => setLangage(event.target.value)}/>
    <label htmlFor="">Image:</label>
    <input type="text" name="image"  placeholder={image}    onChange={event => setImage(event.target.value)}/>


      </form>

      <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
        title="delete"
        size={1}


        color="red"
      />


            <Icon path={ mdiCheck }   onClick={() => onUpdate(_id,langageNew,imageNew)} style={{cursor:"pointer"}}
              title="validate"
              size={1}


              color="green"
            />







    </div>
  );
};

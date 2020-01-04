

import React, { useState }  from 'react';
import store from "../../../../redux/store"

import { UPDATE_EXERCICE } from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ exercice: { type, ennonce, _id }, onDelete,onUpdate }) => {
  //console.log(exercice)

  const [typeNew, setType] = useState('');
  const [ennonceNew, setEnnonce] = useState('');
  return (
    <div style={ styles }>
      <h2>{ type }</h2>
      <p>{ ennonce }</p>

      <form >
    <label htmlFor="">Ennonce:</label>
    <input type="text" name="ennonce"  placeholder={ennonce}  onChange={event => setEnnonce(event.target.value)}/>
    <label htmlFor="">Type:</label>
    <input type="text" name="type"  placeholder={type}    onChange={event => setType(event.target.value)}/>


      </form>


      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)} >
        Remove
      </button>


      <button className="btn btn-danger" type="button" onClick={() => onUpdate(
    _id,typeNew,ennonceNew)} >
        Update
      </button>


    </div>
  );
};

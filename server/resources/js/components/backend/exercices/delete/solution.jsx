

import React from 'react';
import store from "../../../../redux/store"

import { UPDATE_SOLUTION } from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ solution: { type, solution, _id }, onDelete,onUpdate }) => {
  console.log(solution)



  return (
    <div style={ styles }>
      <h2>{ type }</h2>
      <p>{ solution }</p>

      <form >
    <label htmlFor="">Solution:</label>
    <input type="text" name="solution"  placeholder={solution} value={solution}/>
    <label htmlFor="">Type:</label>
    <input type="text" name="type"  placeholder={type}  value={type}/>

    <button type="submit">envoie</button>
      </form>


      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)} >
        Remove
      </button>


      <button className="btn btn-danger" type="button" onClick={() => onUpdate({
        _id,
        solution,
        type
      })} >
        Update
      </button>


    </div>
  );
};

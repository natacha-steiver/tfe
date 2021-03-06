

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import { UPDATE_SOLUTION } from "../../../../redux/constantes/index";
import soluImg from '../../../../../../public/images/solution.png';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: ' 7em',
  padding: '.6rem 1rem',

  borderRadius: '7px'
};
window.store=store;
export default ({ solution: { type, solution,ref, _id }, onDelete,onUpdate }) => {
  console.log(solution)

  const [typeNew, setType] = useState('');
  const [solutionNew, setSolution] = useState('');
  const [refNew, setRef] = useState('');

  return (
    <div style={ styles } className="update">
    <img src={soluImg} alt="solution"/>

<div className="bandeau">
<h2>{ type }</h2>
<p>{ref}</p>
<h2>Solutions:</h2>

{
solution[0].map((solution,index)=>{
return(
  <p key={solution._id}>{solution.toString()}</p>
)
})
}

</div>
      <form >


<p>!!! Séparez les solutions par le caractère *</p>
<label htmlFor="">Solution:</label>

    <textarea
      cols="19"
      rows="8"
      placeholder="Solution"
      className="form-control"
      name="solutions"
       onChange={event => setSolution(event.target.value)}
      defaultValue={
          solution.map((solution,index)=>{
          return(
              solution.toString()
          )
        })
      }>
    </textarea>
    <label htmlFor="">Type:</label>
    <input type="text" name="type"  placeholder={type}    onChange={event => setType(event.target.value)}/>

    <label htmlFor="">ref:</label>
    <input type="text" name="ref"  placeholder={ref}    onChange={event => setRef(event.target.value)}/>

      </form>

      <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
        title="delete"
        size={1}


        color="red"
      />


            <Icon path={ mdiCheck }   onClick={() => onUpdate(_id,typeNew,solutionNew,refNew)} style={{cursor:"pointer"}}
              title="validate"
              size={1}


              color="green"
            />







    </div>
  );
};

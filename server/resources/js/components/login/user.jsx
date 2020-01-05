

import React, { useState }  from 'react';
import store from "../../redux/store"

const [emailNew, setEmail] = useState('');
const [passwordNew, setPassword] = useState('');
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ user: { email, password, _id }, onDelete,onUpdate }) => {
  console.log(user)


  return (
    <div style={ styles }>
      <h2>{ email }</h2>
      <p>{ password }</p>


      <form >
    <label htmlFor="">Email:</label>
    <input type="text" name="email"  placeholder={email}  onChange={event => setEmail(event.target.value)}/>
    <label htmlFor="">Password:</label>
    <input type="text" name="password"  placeholder={password}    onChange={event => setPassword(event.target.value)}/>


      </form>


      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)} >
        Remove
      </button>


      <button className="btn btn-danger" type="button" onClick={() => onUpdate(
    _id,emailNew,passwordNew)} >
        Update
      </button>





    </div>
  );
};

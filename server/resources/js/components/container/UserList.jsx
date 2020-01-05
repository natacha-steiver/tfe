// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import User from '../login/user';


function UserList({users, onDelete,onUpdate }) {

  return (
    <div>
      {
        users.map((user,index )=> {
        return (

          <User user={user}  key={user._id} onDelete={ onDelete } onUpdate={onUpdate}/>
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteUser(id))
    },
    onUpdate: (id,email,password) => {
      dispatch(updateUser(id,email,password))
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

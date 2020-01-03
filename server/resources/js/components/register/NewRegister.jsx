// NewPost.js

import React,{useState} from 'react';
import store  from "../../redux/store";
import { POST_REGISTER } from "../../redux/constantes/index";
class NewRegister extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    email: 'email',
    password: 'password'
  }
  this.handleSubmit=this.handleSubmit.bind(this)
  this.handleInputChange=this.handleInputChange.bind(this)
  this.handleReset=this.handleReset.bind(this)
}


  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e){
    e.preventDefault();



      this.handleReset();

  };

  handleReset(){
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
          <form method="POST" onSubmit={ ()=>{  this.props.onAddRegister(this.state)}}>
          <div className="form-group">
              <input
              type="text"
              placeholder="email"
              className="form-control"
              name="email"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.email }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="password"
              className="form-control"
              name="password"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.password }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewRegister;

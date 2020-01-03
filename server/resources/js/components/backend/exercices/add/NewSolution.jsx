// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_SOLUTION } from "../../../../redux/constantes/index";
class NewSolution extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    type: 'type',
    solution: 'solution'
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
      type: '',
      solution: ''
    });
  };

  render() {
    return (
      <div>
          <form method="POST" onSubmit={ ()=>{  this.props.onAddSolution(this.state)}}>
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="type"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.type }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Solution"
              className="form-control"
              name="solution"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.solution }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewSolution;

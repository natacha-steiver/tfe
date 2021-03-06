// NewPost.js

import React from 'react';
import store  from "../../../../redux/store";
import { ADD_SOLUTION } from "../../../../redux/constantes/index";
class NewSolution extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      _id:"hhjhj",
      type: 'type',
      solution: 'solution'
    };

  }


  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();


      this.props.onAddSolution(this.state);
      this.handleReset();

  };

  handleReset=()=>{
    this.setState({
      type: 'e',
      solution: 'd'
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="type"
              onChange={ this.handleInputChange }
              value={ this.state.type }
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
              value={ this.state.solution }>
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

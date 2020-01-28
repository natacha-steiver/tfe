// NewExercice.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_EXERCICE } from "../../../../redux/constantes/index";
import { FETCH_EXERCICE } from "../../../../redux/constantes/index";





class NewExercice extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    type: 'type',
    ennonce: 'ennonce',
    titre:'titre',
    ref:'ref'
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
      ennonce: '',
      titre:"",
      ref:""
    });
  };

  render() {
    return (
      <div>
          <form method="POST" onSubmit={ ()=>{  this.props.onAddExercice(this.state)}}>
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
          <div>
          <input
          type="text"
          placeholder="ref"
          className="form-control"
          name="ref"
          onChange={ this.handleInputChange }
          defaultValue={ this.state.ref}
        />
      </div>

      <div>
      <input
      type="text"
      placeholder="titre"
      className="form-control"
      name="titre"
      onChange={ this.handleInputChange }
      defaultValue={ this.state.titre}
    />
  </div>

          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="ennonce"
              className="form-control"
              name="ennonce"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.ennonce }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Add Exercice</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewExercice;

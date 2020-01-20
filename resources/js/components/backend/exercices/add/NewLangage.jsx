// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_LANGAGE } from "../../../../redux/constantes/index";
class NewLangage extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    langage: 'langage',
    image: 'image'
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
      langage: '',
      image: ''
    });
  };

  render() {
    return (
      <div>
          <form method="POST"  onSubmit={ ()=>{  this.props.onAddLangage(this.state)}} >
          <div className="form-group">
              <input
              type="text"
              placeholder="Langage"
              className="form-control"
              name="langage"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.langage }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Image"
              className="form-control"
              name="image"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.image }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Add langage</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewLangage;

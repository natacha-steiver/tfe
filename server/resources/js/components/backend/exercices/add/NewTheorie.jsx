// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_THEORIE } from "../../../../redux/constantes/index";
class NewTheorie extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    titre: 'titre',
    texte: 'texte',
    image:'image',
    video:'video',
    langage:'langage'
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
      titre: '',
      texte: '',
      image:'',
      video:'',
      langage:'',
    });
  };

  render() {
    return (
      <div>
          <form method="POST" onSubmit={ ()=>{  this.props.onAddTheorie(this.state)}}>
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="titre"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.titre }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
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
              placeholder="texte"
              className="form-control"
              name="texte"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.texte }>
            </textarea>
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="image"
              className="form-control"
              name="image"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.image }>
            </textarea>
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="video"
              className="form-control"
              name="video"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.video}>
            </textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Theorie</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default NewTheorie;

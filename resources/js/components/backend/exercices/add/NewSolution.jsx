// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_SOLUTION } from "../../../../redux/constantes/index";
import '../../../../../assets/sass/backend.scss';
import soluImg from '../../../../../../public/images/solution.png';

class NewSolution extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    type: 'type',
    solution: 'solution',
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
      solution: '',
      ref:''
    });
  };

  render() {
    return (
    <div className="form">
    <div className="formulaireAdd">
    <img src={soluImg} alt="solution"/>
  <h3>Ajoute une solution</h3>
        <form method="POST"  onSubmit={ (e)=>{ e.preventDefault(); this.props.onAddSolution(this.state)}} >
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
            <input
            type="text"
            placeholder="ref"
            className="form-control"
            name="ref"
            onChange={ this.handleInputChange }
            defaultValue={ this.state.ref }
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
          <button type="submit" className="btn btn-primary" >Add Post</button>
          <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
            Reset
          </button>
        </div>

      </form>
    </div>
    <div className="guide">
    <h3>Notification</h3>
<p>The Restaurant Order Form allows customers to make an order and provides delivery, pickup, or catering directly options through the restaurant website. If is useful to quickly process your orders online. Simply customize the form template, embed it in your website, and watch as submitted orders are automatically sent straight to your JotForm account. If you download JotForm Mobile Forms, our free mobile app, you can view submissions on any device — to ensure customers get their food as quickly as possible!</p>
<p>
Easily personalize your Restaurant Order Form with our free Form Builder.  add your menu, photos and descriptions of your dishes. Take your efficiency up a notch by syncing form responses to your other accounts — we have 130+ powerful apps to choose from, including Slack, monday.com, and Google Drive. And if you’d like to accept card payments online, just integrate with a trusted payment processor like Squ</p>
    </div>
    </div>
    );
  }
}

export default NewSolution;

import React,{Component} from 'react'
import {register,getAdmin,updateAdmin,deleteAdmin} from '../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
//ajout nom dans DB ok
class Register extends Component{

  constructor(props){
    super(props)
    this.state={
      id: '',
      term: '',
      editDisabled: false,
      items: [],
      admins:[],
      email:'',
      password:''
    }
    this.onSubmit= this.onSubmit.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)


  }
  componentDidMount(){
this.getAll()



  }
  componentDidUpdate(){
this.getAll()



  }
  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getAll = () =>{
    getAdmin().then(
      data => {
        this.setState(
        {

          admins: [...data],

        },    () => {
              console.log(this.state.admins)
            }
        )
      }
    )
  }


  onSubmit(e){
    e.preventDefault()
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    register(email,password)

  }




  render() {
    const data=this.state.admins
    return (
      <div >

      {data.map((value, index) => {
     return <div key={value._id}>
       <p> id: {value._id}</p>
    <p> email: {value.email}</p>
    <p> password: {value.password}</p>
    <label htmlFor="">email:</label>
    <input type="text" name="email"  id="email" placeholder="email"   onChange={ this.handleInputChange }/>

    <label htmlFor="">password:</label>
    <input type="text" name="password"  id="password" placeholder="password"   onChange={ this.handleInputChange }/>
    <button type='button' onClick={(e)=>{
      updateAdmin( value._id,this.state.email,this.state.password)
    }}>envoie</button>
<button type="button" onClick={(e)=>{
  deleteAdmin( value._id)}}>delete</button>
      </div>
           })}

      <h3>Register</h3>

      <form  onSubmit={this.onSubmit} >
      <label htmlFor="">email:</label>
      <input type="text" name="email"  id="email" placeholder="email"/>

      <label htmlFor="">password:</label>
      <input type="text" name="password"  id="password" placeholder="password"/>

      <button type='submit'>envoie</button>

      </form>






      </div>
    );
  }


}

export default Register

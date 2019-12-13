import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
//ajout nom dans DB ok
class Update extends Component{

    constructor(props){
      super(props)
      this.state={
        id: '',
        term: '',
        editDisabled: false,
        items: [],
      }
     this.onSubmit= this.onSubmit.bind(this)


    }
    componentWillMount(){
      setInterval(()=>{
        this.getAll()
      },1000)

    }
    componentDidUpdate(){
      setInterval(()=>{
        this.getAll()
      },1000)
    }
    componentDidMount(){
      setInterval(()=>{
        this.getAll()
      },1000)
    }
componentDidUpdate(){
}
    onSubmit = e =>{
      e.preventDefault()
      var id= document.getElementById("id").value;
      var solution= document.getElementById("solution").value;
      var type= document.getElementById("type").value;

      updateEx(id,solution,type)
  //deleteList(id)

    }

        modifier=e=>{
          e.preventDefault()
    /*
    let test= document.querySelectorAll('.modifier')


        test.forEach((test) => {
            test.innerHTML='<input type="text" />'

        });

     */

    let test= document.querySelectorAll('.modifier')
//a modifier pour que ce soit le bon résultat et pas que le premier p

//var placeholder =  document.querySelector('.modifier').innerHTML
        test.forEach((test) => {
/*
this.state.items.map(item=>(
  test.innerHTML=`<input class="input"  placeholder=${item.type}/><input class="input"  placeholder=${item.solution}/>`
))
 */
var placeholder=test.innerHTML;

           test.innerHTML='<input class="input" type="text" placeholder='+placeholder+' />'
            function logKey(event) {
              if (event.key === "Enter") {
               event.preventDefault();
                 test.innerHTML="<p>"+event.target.value+"</p>"

               // Do more work
           }
          }
          test.querySelector('.input').addEventListener('keydown', logKey);

        });




        }


update = e =>{
  e.preventDefault()
  var id= document.getElementById("id").value;
  var solution= document.getElementById("solution").value;
  var type= document.getElementById("type").value;

  updateEx(id,solution,type)
}



    getAll = () =>{
      getList().then(
        data => {
          this.setState(
          {

            items: data,

          },    () => {
                console.log(this.state.items)
              }
          )
        }
      )
    }


    render() {
const data=this.state.items

    return (
        <div>
        <h3>Modifier</h3>

        <form onSubmit={this.onSubmit}>
        <label htmlFor="">Id:</label>
        <input type="text" name="id"  id="id" placeholder={data._id} />
      <label htmlFor="">Type:</label>
      <input type="text" id="type" name="type"  placeholder={data.type} />
      <label htmlFor="">solution:</label>
      <input type="text" name="solution" id="solution"  placeholder={data.solution} />

      <button id="update" >envoie</button>

        </form>
{this.state.items.map(item=>(
  <div>

  <div >

  <p className="modifier" id="type" >{item.type}</p>
  </div>
  <div >
  <p  className="modifier" id="solution">{item.solution}</p>
  </div>




<button onClick={(e)=>{this.modifier(e)}}>modif</button>
<button onClick={()=>{         updateEx(item._id,document.querySelector('.modifier:nth-of-type(1) p').innerHTML,document.querySelector('.modifier:nth-of-type(2) p').innerHTML)
}}>update</button>
  </div>
))}
  <ul>



  </ul>


    </div>
    );
  }


}

export default Update

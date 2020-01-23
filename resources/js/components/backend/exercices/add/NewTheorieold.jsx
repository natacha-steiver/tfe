// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_THEORIE } from "../../../../redux/constantes/index";
import axios from 'axios';
class NewTheorie extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    titre: 'titre',
    texte: 'texte',
    image:[],
    video:[],
    langage:'langage'
  }
  this.handleSubmit=this.handleSubmit.bind(this)
  this.handleInputChange=this.handleInputChange.bind(this)
  this.handleReset=this.handleReset.bind(this)
  this.getFile=this.getFile.bind(this)

}


  handleInputChange(e){
console.log('kk')
let data = new FormData()
let input_image = document.getElementById('image')
let input_video= document.getElementById('video')

Array.from(input_image.files).forEach((f) => {
   data.append('image', f)
})
Array.from(input_video.files).forEach((f) => {
   data.append('video', f)
})
data.append(e.target.name,e.target.value)

  this.props.onAddTheorie(data)
 axios.post('api/theorie/add', data)
   .then(res => {
       console.log(res);
   })

  };


  getFile() {

       let file = event.target.files[0]
       this.selectedFile = file
       let fileV = event.target.files[1]
       this.selectedFileV= fileV
     }

     uploadFile() {
      //  let fd = new FormData()
      //  fd.append('image', this.selectedFile, this.selectedFile.name)
      //  fd.append('video', this.selectedFileV)
      //
    /*
    let data = new FormData()
   let input_image = document.getElementById('image')
   let input_video= document.getElementById('video')
   Array.from(input_image.files).forEach((f) => {
       data.append('image', f)
   })
   Array.from(input_video.files).forEach((f) => {
       data.append('video', f)
   })
     axios.post('api/theorie/add', data)
       .then(res => {
           console.log(res);
       })
     */


    console.log('ok')
    }

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
      <div className="form-group">
        <input
        type="file"
          cols="19"
          rows="8"
          id="image"
          placeholder="image"
          className="form-control"
          name="file[]"
          multiple={true}
          onChange={ this.handleInputChange }
        />
      </div>
      <div className="form-group">
        <input
        type="file"
          cols="19"
          rows="8"
          id="video"
          placeholder="video"
          className="form-control"
          name="file[]"
          multiple={true}
          onChange={ this.handleInputChange }
        />
      </div>

          <form method="POST"  encType="multipart/form-data" >
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="titre"
              id="titre"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.titre }
            />

            <button type="button" onClick={()=>{this.uploadFile()}}>telecharge</button>
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="langage"
              id="langage"
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
              id="texte"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.texte }>
            </textarea>
          </div>


          <div className="form-group">
            <button type="button" className="btn btn-primary"   >Add Theorie</button>
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

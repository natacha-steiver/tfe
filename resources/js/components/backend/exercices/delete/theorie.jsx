

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import axios from 'axios';
import { UPDATE_THEORIE} from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ theorie: { titre,texte,image,video,langage, _id }, onDelete,onUpdate,onFetch }) => {
  //console.log(exercice)

  const [titreNew, setTitre] = useState('');
  const [texteNew, setTexte] = useState('');
  const [imageNew, setImage] = useState('');
  const [videoNew, setVideo] = useState('');
  const [langageNew, setLangage] = useState('');
  return (
    <div style={ styles }>
    <h2>{ titre }</h2>
    <p>{ texte }</p>
    <p>{ langage}</p>
    {

      video != null ? video._files && video._files.map((el,i)=>{
        return(
          <li key={i}>
          <iframe src={`http://localhost:3333/videos/${el.clientName}`}frameBorder="0"></iframe>
            </li>
          )

        }): console.log("loop video doesn't exist")
      }
      {
        video != null  ?
        !video._files &&



        <iframe src={`http://localhost:3333/videos/${video.clientName}`}frameBorder="0"></iframe>



          : console.log("video doesn't exist")

        }

        {

          image != null ?
          image._files &&
          image._files.map((el,i)=>{
            return(
              <li key={i}><img src={`http://localhost:3333/images/${el.clientName}`} alt={image}/></li>
              )

            }):console.log("image doesn't exist")

          }

          {

            image !=null  ?
            !image._files &&

            <img src={`http://localhost:3333/images/${image.clientName}`} alt={image}/>


              :console.log("image loop doesn't exist")
            }








            <form >
            <label htmlFor="">Titre:</label>
            <input type="text" name="titre"  placeholder={titre}  onChange={event => setTitre(event.target.value)}/>
            <label htmlFor="">Texte:</label>
            <input type="text" name="texte"  placeholder={texte}    onChange={event => setTexte(event.target.value)}/>
            <div className="form-group">
              <input
              type="file"
                cols="19"
                rows="8"
                id="images"
                placeholder="images"
                className="form-control"
                name="file[]"
                multiple={true}
                onChange={event => setImage(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              type="file"
                cols="19"
                rows="8"
                id="videos"
                placeholder="videos"
                className="form-control"
                name="file[]"
                multiple={true}
                onChange={event => setVideo(event.target.value)}
              />
            </div>
            <label htmlFor="">langage:</label>
            <input type="text" name="langage"  placeholder={langage}    onChange={event => setLangage(event.target.value)}/>

            </form>


            <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)} >
            Remove
            </button>


            <button className="btn btn-danger" type="button"onClick={()=>{

              let data = new FormData()
             let input_image = document.getElementById('images')
             let input_video= document.getElementById('videos')
             Array.from(input_image.files).forEach((f) => {
                 data.append('images', f)
             })
             Array.from(input_video.files).forEach((f) => {
                 data.append('videos', f)
             })
             data.append('titre',titreNew )
             data.append('texte',texteNew )

             data.append('langage',langageNew )
               axios.put(`api/theorie/${_id}`, data)
                 .then(res => {
                       onFetch()
                     console.log(res);
                     return {
                       type: UPDATE_THEORIE,
                       payload: {
                         _id: res.data.id,
                         titre: res.data.titre,
                         texte: res.data.texte,
                         image:res.data.image,
                         video:res.data.video,
                         langage:res.data.langage,
                         date: new Date().toLocaleDateString()
                       }
                 }}).catch(error => {
                     throw(error);
                   });



          }} >
              Update
              </button>


              </div>
            );
          };

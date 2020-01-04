

import React, { useState }  from 'react';
import store from "../../../../redux/store"

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
export default ({ theorie: { titre,texte,image,video, _id }, onDelete,onUpdate }) => {
  //console.log(exercice)

  const [titreNew, setTitre] = useState('');
  const [texteNew, setTexte] = useState('');
  const [imageNew, setImage] = useState('');
  const [videoNew, setVideo] = useState('');
  return (
    <div style={ styles }>
      <h2>{ titre }</h2>
      <p>{ texte }</p>
    <img src={image} alt={image}/>
            <iframe src={video} frameBorder="0"></iframe>
      <form >
    <label htmlFor="">Titre:</label>
    <input type="text" name="titre"  placeholder={titre}  onChange={event => setTitre(event.target.value)}/>
    <label htmlFor="">Texte:</label>
    <input type="text" name="texte"  placeholder={texte}    onChange={event => setTexte(event.target.value)}/>
    <label htmlFor="">Image:</label>
    <input type="text" name="image"  placeholder={image}    onChange={event => setImage(event.target.value)}/>
    <label htmlFor="">Video:</label>
    <input type="text" name="video"  placeholder={video}    onChange={event => setVideo(event.target.value)}/>
      </form>


      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)} >
        Remove
      </button>


      <button className="btn btn-danger" type="button" onClick={() => onUpdate(
    _id,titreNew,texteNew,imageNew,videoNew)} >
        Update
      </button>


    </div>
  );
};

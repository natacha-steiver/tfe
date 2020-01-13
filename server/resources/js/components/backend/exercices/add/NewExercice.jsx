// NewExercice.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_EXERCICE } from "../../../../redux/constantes/index";
import { FETCH_EXERCICE } from "../../../../redux/constantes/index";

export default ({ exercice: { type, ennonce,titre, _id }, onAddExercice,onFetch}) => {



  const [typeNew, setType] = useState('');
  const [ennonceNew, setEnnonce] = useState('');
  const [titreNew, setTitre] = useState('');




    return (
      <div>
          <form method="POST">
          <div className="form-group">
              <input
              type="text"
              placeholder="Type"
              className="form-control"
              name="type"
              onChange={event => setType(event.target.value)}
              defaultValue={ this.state.type }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="titre"
              className="form-control"
              name="titre"
              onChange={event => setTitre(event.target.value)}
              defaultValue={ this.state.titre }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="ennonce"
              className="form-control"
              name="ennonce"
              onChange={event => setEnnonce(event.target.value)}
              defaultValue={ this.state.ennonce }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={ ()=>{  this.props.onAddExercice(typeNew,ennonceNew,titreNew)}} >Add Exercice</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>

        </form>

        <button type="button" className="btn btn-primary" onClick={ ()=>{  this.props.onFetch()}} >liste Exercice</button>

      </div>
    );

}

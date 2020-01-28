import React from 'react';
import ReactDOM from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'

import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/addon/lint/css-lint'
//import "codemirror/addon/lint/html-lint"
import 'codemirror/addon/lint/lint.css'



import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

import 'codemirror/mode/css/css'
import 'codemirror/mode/python/python'
import "../../../assets/sass/terminal.min.css"
window.JSHINT = JSHINT

class Test extends React.Component {



    constructor(props){
      super(props)
      this.state={

        valeur:"",
        solution: "",
        mode:"",
        valeurcss:"",
        valeurhtml:"",
        valeurjs:"",
        valeurpython:"",
        click:false,
        valeur:"",
        currentLanguage:"",
        jsclick:false,
        htmlclick:false,
        langagechoose:false,
        resultat:false
      }

      const langage =this.props.langage

  this.sendData= this.sendData.bind(this)
    }
  sendData(){
    if(this.state.mode=="text/x-python"){
      this.props.parentCallback(      this.state.mode.replace(/^text\/x-/,"") );

    }else{
      this.props.parentCallback(         this.state.mode.replace(/^text\//,"")
);

    }          }
componentDidMount(){
this.sendData()
this.props.parentCallback(this.state.mode.replace('text/',"") );
}


selectMode(){
    var modeInput = document.getElementById("select");

    var myindex  = modeInput.selectedIndex;
    var modefly = modeInput.options[myindex].text.toLowerCase();

  //  alert(modefly); // This is giving me the exact mode on the screen
        this.setState({mode:modefly},    console.log(this.state.mode +"fct1"))

  //  editor.setOption("mode", modefly);// no change in the mode
  //  CodeMirror.autoLoadMode(editor, modefly);//no change in the mode
    //editor.refresh();
     }
  componentDidUpdate(){
    if(this.state.mode=='' ){
        this.selectMode()


    }

//console.log(this.state.mode.replace((/^text\/x-/)|(/^text\//),"") )
this.props.parentCallback(this.state.mode );
this.sendData()
      this.test= React.createRef();
    const getGeneratedPageURL = ({ html, css, js,python }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
    }

    const cssURL = getBlobURL(css, 'text/css')
    const jsURL = getBlobURL(js, 'text/babel')
    const pythonURL = getBlobURL(python, 'text/python')

    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script type="text/babel" src="${jsURL}"></script>`}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.6/brython.js"></script>


        </head>
        <script>

        </script>
        <body onload="brython()" id="corp">
          ${python && `<script type="text/python">
        ${python}

          </script>`}
          ${html || ''}
          <input id="zone">
          <button id="mybutton">click !</button>

        </body>
      </html>
    `

    return getBlobURL(source, 'text/html')
  }

  const url = getGeneratedPageURL({
    html: this.state.valeurhtml ,
    css: this.state.valeurcss,
    python:this.state.valeurpython,
  js:setTimeout(()=>{
    if(this.state.click){
        js:eval(this.state.valeurjs)
    }


},1),

  })

  document.getElementById('iframe').src = url
  }



  render(){

    return (
      <div style={{width:"100%"}}>
      <h2 className="titre">IDE - testez vos codes librement</h2>
      <button onClick={()=>{this.setState({htmlclick:false,langagechoose:false,resultat:false,jsclick:true})}}>React/JS</button>
      <button onClick={()=>{this.setState({jsclick:false,langagechoose:false,resultat:false,htmlclick:true})}}>HTML</button>

      <button onClick={()=>{this.setState({htmlclick:false,jsclick:false,resultat:false,langagechoose:true})}}>ton langage</button>

      <button onClick={()=>{this.setState({htmlclick:false,jsclick:false,langagechoose:false,resultat:true})}}>Résultat</button>

      <br/>
{this.state.jsclick &&
  <div>
  <CodeMirror id="js"

    value="//React/jsx  ou ES6( rend le composant avec document.getElementById('test'))"
    options={{
      mode: 'text/jsx',
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%',marginTop:"2em",position:"relative",top:"57rem"}}
    onChange={(editor, data, value) => {


console.log(editor.getValue())


const getJS = jsx => Babel.transform(jsx, {
presets: ["es2015"],
plugins: ["transform-react-jsx"]
}).code;
    this.setState({valeurjs:  getJS(editor.getValue())})



}}
/>
<button onClick={()=>{
  this.setState({click: true});
  setTimeout(()=>{
   this.setState({click: false})
},2000)
}}>compile</button>
</div>
}


{this.state.htmlclick  &&
  <CodeMirror

    value='//html'
    options={{
      mode : "xml",
      htmlMode: true,
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%',marginTop:"2em",position:"relative",top:"57rem"}}
    onChange={(editor, data, value) => {




    this.setState({valeurhtml: editor.getValue()})



}

}
/>

}




{this.state.langagechoose  &&
  <div>
  <CodeMirror

    value='//choisissez votre mode'
    options={{
      mode: this.state.mode,
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%',marginTop:"2em",position:"relative",top:"57rem"}}
    onChange={(editor, data, value) => {



    const langages =this.state.mode
    switch (langages) {
      case "text/x-python":
  this.setState({valeurpython:  editor.getValue()})
  break;
        case "text/javascript":
  this.setState({valeurjs:  editor.getValue()})
  break;
          case "text/xml":
  this.setState({valeurhtml:  editor.getValue()})
  break;
            case "text/css":
  this.setState({valeurcss:  editor.getValue()})
  break;
      default:

  console.log('default')
       }






  }}


  />
  <button onClick={()=>{
    this.setState({click: true});
    setTimeout(()=>{
     this.setState({click: false})
  },2000)
}}>compile</button>

  </div>
}
<select name="idLanguage" id="select" onChange={()=>{this.selectMode()}}>
<option value="1">text/x-python</option>
<option value="10">text/javascript</option>

<option value="40">text/xml</option>

<option value="44" >text/css</option>
</select>

  <div id="test"></div>
  <iframe ref={this.test} id="iframe" style={{width:"100%",height:"30rem"}}>



  </iframe>



</div>
      );
  }
}
export default Test

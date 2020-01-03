import React from 'react';
import ReactDOM from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'
import {getList} from '../../ajax'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/javascript/javascript'
window.JSHINT = JSHINT

class Test extends React.Component {



    constructor(props){
      super(props)
      this.state={

        valeur:"",
        solution: "",
        mode:"",
        valeurcss:"",
        click:false
      }

    }
    componentDidMount(){
      this.getAll()
    }



    getAll = () =>{
      getList().then(
        data => {
          const result=data[0].result.replace(/\\n/g,"<br />").replace(/\\t/g,"&nbsp; ")
          this.setState(
          {

            solution:result,

          },    () => {
              console.log(this.state.solution)

              }
          )
        }
      )
    }

    selectMode(){
        var modeInput = document.getElementById("select");
        var myindex  = modeInput.selectedIndex;
        var modefly = modeInput.options[myindex].text.toLowerCase();

      //  alert(modefly); // This is giving me the exact mode on the screen
            this.setState({mode:modefly})
            console.log(this.state.mode)
      //  editor.setOption("mode", modefly);// no change in the mode
      //  CodeMirror.autoLoadMode(editor, modefly);//no change in the mode
        //editor.refresh();
         }
  componentDidUpdate(){
  if(this.state.mode==''){
      this.selectMode()
  }
      this.test= React.createRef();
    const getGeneratedPageURL = ({ html, css, js }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
    }

    const cssURL = getBlobURL(css, 'text/css')
    const jsURL = getBlobURL(js, 'text/babel')

    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script type="text/babel" src="${jsURL}"></script>`}
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `

    return getBlobURL(source, 'text/html')
  }

  const url = getGeneratedPageURL({
    html: this.state.valeurhtml,
    css: this.state.valeurcss,
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
      <div>
      <CodeMirror id="js"

        value='//crée une fonction pour déplacer ton perso'
        options={{
          mode: 'text/jsx',
          gutters: ["CodeMirror-lint-markers"],
          lint:true,
          styleActiveLine: true,
          lineNumbers: true
        }}
        style={{width:'100%',height:'50%'}}
        onChange={(editor, data, value) => {

if(editor.getValue().includes(this.state.solution)){
  console.log('ok')
}else{

console.log( this.state.solution+"</br>"+editor.getValue())
}

const getJS = jsx => Babel.transform(jsx, {
    presets: ["es2015"],
    plugins: ["transform-react-jsx"]
}).code;
        this.setState({valeurjs:  getJS(editor.getValue())})



}

  }
  />
  <button onClick={()=>{
    this.setState({click: true});
    setTimeout(()=>{
     this.setState({click: false})
  },2000)
}}>compile</button>
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
    style={{width:'100%',height:'50%'}}
    onChange={(editor, data, value) => {




    this.setState({valeurhtml: editor.getValue()})



}

}
/>
<CodeMirror

  value='//css'
  options={{
    mode: this.state.mode,
    gutters: ["CodeMirror-lint-markers"],
    lint:true,
    styleActiveLine: true,
    lineNumbers: true
  }}
  style={{width:'100%',height:'50%'}}
  onChange={(editor, data, value) => {

  console.log(this.state.mode)


  this.setState({valeurjs:  editor.getValue()})



}

}
/>
      <iframe ref={this.test} id="iframe" style={{width:"100%",height:"200px"}}>



      </iframe>

<div>
<select name="idLanguage" id="select" onChange={()=>{this.selectMode()}}>
<option value="1">Python</option>
<option value="10">JavaScript</option>
<option value="33">Asterisk dialplan</option>
<option value="34">Clojure</option>
<option value="35">Common Lisp</option>
<option value="36">D</option>
<option value="37">ECL</option>
<option value="38">Go</option>
<option value="39">Haskell</option>
<option value="40">HTML</option>
<option value="41">Jinja2</option>
<option value="42">LiveScript</option>
<option value="43">mIRC</option>
</select>
</div>
</div>
      );
  }
}
export default Test

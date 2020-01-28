import React from 'react';
import ReactDOM from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'
import {getList,solutionsRefEx} from '../../ajax'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import SolutionListe from '../frontend/apprendre/pratique/solutionRedux';
window.JSHINT = JSHINT

class Test extends React.Component {



    constructor(props){
      super(props)
      this.state={
        tab:[],
        valeur:"",
        solution: [],
        mode:"",
        valeurcss:"",
        valeurhtml:"",
        valeurjs:"",
        valeurpython:"",
        click:false,
        valeur:"",
        currentLanguage:"",
        solutionEX:"",
        voirSolution:false
      }
  const soluces =this.props.soluces
      const langage =this.props.langage
      switch (langage) {
        case "text/python":
            this.setState({currentLanguage:"text/x-python"},    console.log(this.state.currentLanguage +"current"))
          break;
          case "text/javascript":
              this.setState({currentLanguage:"text/javascript"},    console.log(this.state.currentLanguage +"current"))
            break;
            case "text/html":
                this.setState({currentLanguage:"text/xml"},    console.log(this.state.currentLanguage +"current"))
              break;
              case "text/css":
                  this.setState({currentLanguage:"text/css"},    console.log(this.state.currentLanguage +"current"))
                break;
        default:
console.log('default')
      }

    }
    componentDidMount(){
      this.getAll()
      this.getSolutionsEx()
      const tab= this.props.soluces
          this.setState({tab:tab})


console.log(this.state.tab)


    }



    getAll = () =>{
      getList().then(
        data => {
        //  const result=data[0].result.replace(/\\n/g,"<br />").replace(/\\t/g,"&nbsp; ")
          this.setState(
          {

            solution:data,

          },    () => {
              console.log(this.state.solution)

              }
          )
        }
      )
    }
getSolutionsEx=()=>{
  solutionsRefEx().then(
    data => {
      const result=data
      this.setState(
      {

        solutionEX:result,

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
            this.setState({mode:modefly},    console.log(this.state.mode +"fct1"))

      //  editor.setOption("mode", modefly);// no change in the mode
      //  CodeMirror.autoLoadMode(editor, modefly);//no change in the mode
        //editor.refresh();
         }
  componentDidUpdate(){
  if(this.state.mode=='' ||this.state.mode=="JavaScript"){
      this.selectMode()
  }
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
      <div>
    <button onClick={()=>{
      this.setState({voirSolution:!this.state.voirSolution})
    }}>voir solutions</button>


    {this.state.voirSolution &&

      <div>

  {

  this.state.tab.map((el,i)=>{
    return (

  el[0].map((ele,ind)=>{
    return(
      ele.map((eles,inde)=>{
        return(

          <li key={inde}>{eles}</li>
        )
      })
    )
  })

  

    )
  })

  }





      </div>
      }
      <br/>
{
  this.props.langage == "text/jsx" &&

  <CodeMirror id="js"

    value='//crée une fonction pour déplacer ton perso'
    options={{
      mode: 'text/jsx',
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%',marginTop:"2em"}}
    onChange={(editor, data, value) => {

if(editor.getValue().includes(this.state.solution)){
console.log('vous avez trouvez la solution')
}else{

console.log( this.state.solution+"</br>"+editor.getValue())


const getJS = jsx => Babel.transform(jsx, {
presets: ["es2015"],
plugins: ["transform-react-jsx"]
}).code;
    this.setState({valeurjs:  getJS(editor.getValue())})



}

}}
/>
}
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
    style={{width:'100%',height:'50%',marginTop:"2em"}}
    onChange={(editor, data, value) => {




    this.setState({valeurhtml: editor.getValue()})



}

}
/>


<div>
<CodeMirror

  value={`// même exercice avec le langage au choix`}
  options={{
    mode: this.state.mode,
    gutters: ["CodeMirror-lint-markers"],
    lint:true,
    styleActiveLine: true,
    lineNumbers: true
  }}
  style={{width:'100%',height:'50%',marginTop:"2em"}}
  onChange={(editor, data, value) => {

  console.log(this.state.mode+"affcihe")


  const langages =this.state.mode
  switch (langages) {
    case "text/x-python":
this.setState({valeurpython:  editor.getValue()})
break;
      case "text/javascript":
this.setState({valeurjs:  editor.getValue()})
break;

    default:

console.log('default')
     }







}}


/>
<select name="idLanguage" id="select" onChange={()=>{this.selectMode()}}>
<option value="1">text/x-python</option>
<option value="10">text/javascript</option>

</select>
</div>

      <iframe ref={this.test} id="iframe" style={{width:"100%",height:"200px"}}>



      </iframe>


</div>
      );
  }
}
export default Test

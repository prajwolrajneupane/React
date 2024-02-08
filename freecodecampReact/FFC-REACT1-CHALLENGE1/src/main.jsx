import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



const Nav =
  (
    <>

      <h1>prajwol</h1>
      <h1>raj</h1>
      <h1>neupane</h1>
      <h1>hero</h1>

    </>
  )

// root = document.querySelector("#root");
// root.append(JSON.stringify(Nav));
// yo bata k bujinxata vanda nav jun created thiyo tyo chai object ko rup ma prapta vairako hunxa ra jaba we use render, taba chai tyo process vayera return hunxa browser ma
//tesaile render ra append work differently

//Tala ko tarika le is how the code is to be written in order to show the result

ReactDOM.createRoot(document.getElementById("root")).render(

  <App />
)





//react dom le chai renders jsx to html
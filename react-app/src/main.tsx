import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //mathi herda root dekhinxa ni tyo chai index.html(root vanney id xa tya) vitra app vanney component pass hu hai vaneko 
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // </React.StrictMode> yesle chai error detect garna madat garxa
)
//render le chai k garney vo ta vanda hamro jsx ma lekhiyeko code jun xa tesmai browser le bujney gari(js ma ) convert garera dekhaidiney vayo.
// k bujda vayo ta vanda  render function converts the jsx for browser and also connects all the components of your program together

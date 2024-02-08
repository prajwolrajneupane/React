import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App god={{ age: 2024, naam: "jesus" }} />
    {/* yo app paxi jun god xa yo argument pass gareko ho... yo uta app.jsx ma pass vairako xa data ko rup ma */}

  </React.StrictMode>,
)

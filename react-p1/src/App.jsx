import React, { useState } from 'react'

import Kya_baba from './kya_baba'

function App() {

  var [a, b] = useState("blue-500")

  function changeColor() {
    b("blue");
  }

  return (
    <>
      <div className="w-full  bg-gray-500">

        <Kya_baba />
      </div>


    </>

  )
}

export default App
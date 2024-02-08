//challenge:Starting from scratch, build and render the html for one section project. 

import React from 'react'

const variable = (
  <h1>
    prajwooool
  </h1>

)

function Friendlyfunction() {

  return (
    <h6>hello everyone!Im very friendly</h6>
  )
}
function App() {

  return (

    <>
      <Friendlyfunction />
      {console.log(variable)}
      {variable}
      < div className='ml-4' >


        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className='h-12 mt-16 mb-4 ' />
        <h2>React is AWWesome</h2>
        <div className="lists ml-16 mt-16" >
          <ul className='list-disc'>



            <li>because its bigger</li>
            <li>because its better</li>
            <li>because its  simpler</li>

          </ul>

        </div>
      </div >

    </>

  )
}

export default App

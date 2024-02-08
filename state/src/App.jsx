// state:
// react ko naam nei react xa kinaki it reacts whenever state changes.. and yo nei react
//  ko main model ho ra yo nei yesko kaam garney tarika ho
// react ma kei change change hunxa vaney that is changed through states
// see hamile kunai event garaunu xa vaney jsx ma kunai element select garna sakidaina
// jastai html ko h1 lai document.querySelector("h1") garera gareko jasari garna mildaina
// kinaki... jsx ma h1 create huda react.createElement("h1") garera vaako hunxa

// jsx ta bass easier syntax ho... asliyat ma ta yo js mei convert huney ho



import React, { useState } from 'react'

function App(
  { god }
) {


  var [a, b] = useState(69);

  var [t, f] = useState(true);

  // a chai value read garna b chai value update garna lai teta xa

  return (

    <>
      <h1>{god.naam}</h1>
      {/* yo aairako data xani yo aako uta  */}

      <h1 >{a}</h1>
      {/*       
          // chalo lets do something
      
          /// lets create a button which when clicked changes the value of h1 */}

      <button className='p-3 bg-green-500 rounded text-white' onClick={() => {
        b(a + 1);
        { a === 75 ? f(false) : f(true) }


      }}>click me</button>


      <button className='p-3 bg-green-500 rounded text-white' onClick={() => {
        f(!t)
      }}>Change </button>
      {/* what react does is it changes the value of states when the button is clicked.... react le whole webpage lai nei refresh gari basdaina aba.... tei thau ma matra change lyauxa jaha state change vaako xa */}


      <h1 className={`${t === true ? "text-red-600" : "text-blue-600"}`}>


        {t === true ? "suii" : "boooo"}

      </h1>
      {/* condition lagako... eslai chai conditional rendering vanda raixan */}

    </>


  )
}

export default App
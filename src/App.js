import React, { useState } from 'react'
import Form from './components/Form'

function App() {
  //state of app
  const [search, setSearch] = useState('')

  return (
    <div className="conteiner">
      <div className="jumbotron">
        <p className="lead text-center">Image Search Engine</p>
        <Form 
           setSearch={setSearch} 
        />
      </div>
    </div>
  )
}

export default App

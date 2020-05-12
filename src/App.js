import React, { useState, useEffect } from 'react'
import Form from './components/Form'

function App() {
  //state of app
  const [search, setSearch] = useState('')

  //Consulting Api
  useEffect(() => {
    //prevent search empty
    if (search === '') return

    const consultAPI = async () => {
      const imageForPage = 50
      const APIkey= "13456201-848fe7fea9d1f25e15a5cb7c7"
      const url = `https://pixabay.com/api/?key=${APIkey}&q=${search}&per_page=${imageForPage}`

      const response = await fetch(url)
      const result= await response.json()
      setSearch(result.hits)
    }
    consultAPI()
  }, [search])

  return (
    <div className="conteiner">
      <div className="jumbotron">
        <p className="lead text-center">Image Search Engine</p>
        <Form setSearch={setSearch} />
      </div>
    </div>
  )
}

export default App

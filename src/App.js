import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import ListImage from './components/ListImage'

function App() {
  //state of app
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])

  //It will tell us what page we are on
  const [actualpage, setActualPage] = useState(1)
  //It will tell us how many pages there are in total
  const [totalpages, setTotalPages] = useState(1)

  //Consulting Api
  useEffect(() => {
    //prevent search empty
    if (search === '') return

    const consultAPI = async () => {
      const imageForPage = 30
      const APIkey = '13456201-848fe7fea9d1f25e15a5cb7c7'
      const url = `https://pixabay.com/api/?key=${APIkey}&q=${search}&per_page=${imageForPage}&page=${actualpage}`

      const response = await fetch(url)
      const result = await response.json()
      setImages(result.hits)

      //calculate total pages
      const calculateTotalPages = Math.ceil(result.totalHits / imageForPage)
      setTotalPages(calculateTotalPages)
    }
    consultAPI()
  }, [actualpage, search])

  //define the previous page
  const previewPage = () => {
    const newActualPage = actualpage - 1
    //avoid negative paging
    if (newActualPage === 0) return
    setActualPage(newActualPage)
  }

  //define the after page
  const afterPage = () => {
    const newActualPage = actualpage + 1

    if (newActualPage > totalpages) return

    setActualPage(newActualPage)
  }

  return (
    <div className="conteiner">
      <div className="jumbotron">
        <p className="lead text-center">Image Search Engine</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImage images={images} />

        {actualpage === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={previewPage}
          >
            &laquo; Previous
          </button>
        )}

        {actualpage === totalpages ? null : (
          <button type="button" className="btn btn-info" onClick={afterPage}>
            After &raquo;
          </button>
        )}
      </div>
    </div>
  )
}

export default App

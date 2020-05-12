import React, { useState } from 'react'
import Error from './Error.js'
import PropTypes from 'prop-types'


const Form = ({ setSearch }) => {
  //put in the state what is put in the input
  const [term, setTerm] = useState('')
  const [error, setError] = useState(false)

  //searchImage
  const handleSubmit = (e) => {
    e.preventDefault()

    //Validate
    if (term.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    //send search term to main component
    setSearch(term)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>

      {error ? <Error message="add a search term" /> : null}
    </form>
  )
}

//Documentation
Form.propTypes={
    setSearch: PropTypes.func.isRequired
}

export default Form

import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  //const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleChange = (event) => {
    const newText = event.target.value
    //dispatch(setFilter(newText))
    props.setFilter(newText)
    setText(newText)
    //console.log(newText)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
            filter <input type="text" value={text} onChange={handleChange} />
    </div>
  )
}

export default connect(
  null,
  { setFilter }
)(Filter)

//export default Filter
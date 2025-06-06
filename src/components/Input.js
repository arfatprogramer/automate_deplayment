import React from 'react'
import './css/input.css'

const Input = (props) => {

  return (
    <>
      <div className='inputdiv'>
        <label htmlFor={props.name}>{props.title}</label>
        <input type={props.type}
          name={props.name}
          id={props.name}
          autoComplete="off"
          value={props.value||""}
          onChange={props.onChange}
        />
      </div>
    </>
  )
}

export default Input

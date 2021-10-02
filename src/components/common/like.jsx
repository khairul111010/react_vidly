import React, { Component } from 'react'

const Like = (props) => {
  if (props.liked === true)
    return (
      <i
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
        className='fas fa-heart'
      ></i>
    )
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
      className='far fa-heart'
    ></i>
  )
}

export default Like

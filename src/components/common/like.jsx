import React from 'react'

const Like = ({ onClick, liked }) => {
  if (liked === true)
    return (
      <i
        style={{ cursor: 'pointer' }}
        onClick={onClick}
        className='fas fa-heart'
      ></i>
    )
  return (
    <i
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className='far fa-heart'
    ></i>
  )
}

export default Like

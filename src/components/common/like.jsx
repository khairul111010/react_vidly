import React, { Component } from 'react'

class Like extends React.Component {
  render() {
    if (this.props.liked === true)
      return (
        <i
          style={{ cursor: 'pointer' }}
          onClick={this.props.onClick}
          className='fas fa-heart'
        ></i>
      )
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: 'pointer' }}
        className='far fa-heart'
      ></i>
    )
  }
}

export default Like

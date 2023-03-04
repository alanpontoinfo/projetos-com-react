import React from 'react'

/*class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }*/
function Square(props) {
  //render() {
  return (
    <button
      className='square'
      onClick={props.onClick} /* this.setState({ value: 'X' }) {'click aqui')}*/
    >
      {props.value}
    </button>
  )
}

export default Square

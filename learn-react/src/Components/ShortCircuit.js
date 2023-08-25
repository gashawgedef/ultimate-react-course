import React, { Component } from 'react'

function Header(){
  return(
    <h2>Welcome Header</h2>
  )
}

function Menu(){
  return(
    <h2>Welcome Menu</h2>
  )
}

 class ShortCircuit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:false
    }
  }
  
  render() {
    return (
      <div>

       <Header/>
        
      </div>
    )
  }
}

export default ShortCircuit

import { Component } from 'react'
import Cart from './Cart'
import Logo from './Logo'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Logo /> 
        <Cart />
      </nav>
    )
  }
}

export default Navbar

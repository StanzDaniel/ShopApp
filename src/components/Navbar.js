import { Component } from 'react'
import Cart from './Cart'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <p>Logo</p>
        <Cart />
      </nav>
    )
  }
}

export default Navbar

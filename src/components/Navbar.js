import { Component } from 'react'
import Cart from './Cart'
import Logo from './Logo'

class Navbar extends Component {
  render() {
    const { cart } = this.props
    return (
      <nav className='navbar'>
        <Logo /> 
        <Cart cart={cart}/>
      </nav>
    )
  }
}

export default Navbar

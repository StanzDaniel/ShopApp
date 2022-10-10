import { Component } from 'react'
import Cart from './Cart'
import Logo from './Logo'

class Navbar extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props
    return (
      <nav className='navbar'>
        <Logo /> 
        <Cart 
          cart={cart}
          isCartVisible={isCartVisible}
          showCart={showCart}
        />
      </nav>
    )
  }
}

export default Navbar

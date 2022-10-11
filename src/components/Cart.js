import {Component} from "react";
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart, remove } = this.props
    const count = cart.reduce((acc, el) => acc + el.count, 0)

    return (
      <div className='cart'>
        <span className='cart-bubble'>
          {count !== 0 
            ? <BubbleAlert value={count}/> 
            : null 
          }
        </span>
        <img
          alt= 'carro' 
          src='./carro-icon.svg' 
          width='35px'
          onClick={showCart}
        />
        { isCartVisible ? <CartDetails cart={cart} remove={remove}/> : null }
      </div>
    )
  }
}

export default Cart

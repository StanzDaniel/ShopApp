import {Component} from "react";
import BubbleAlert from './BubbleAlert'

class Cart extends Component {
  render() {
    const { cart } = this.props
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
        />
      </div>
    )
  }
}

export default Cart

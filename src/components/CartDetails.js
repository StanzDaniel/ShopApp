import { Component } from 'react'
import Remove from './Remove'

class CartDetails extends Component {
  render() {
    const { cart, remove } = this.props
    const total = cart.reduce((acc, el) => el.count * el.price + acc, 0)
    return (
      <div className='details'>
        <ul className='details-ul'>
          {cart.map(x => 
            <li className='details-li' key={x.name}>
              <img alt={x.name} src={x.img}/>
              {x.name}
              <span>{x.count}<Remove onClick={() => remove(x.name)} /></span>
            </li>
          )}
          <li className='details-li'>Total <span>${total}</span></li>
        </ul>
      </div>
    )
  }
}

export default CartDetails

import { Component } from 'react'

class CartDetails extends Component {
  render() {
    const { cart } = this.props
    const total = cart.reduce((acc, el) => el.count * el.price + acc, 0)
    return (
      <div className='details'>
        <ul className='details-ul'>
          {cart.map(x => 
            <li className='details-li' key={x.name}>
              <img alt={x.name} src={x.img}/>
              {x.name}
              <span>{x.count}</span>
            </li>
          )}
          <li className='details-li'>Total <span>${total}</span></li>
        </ul>
      </div>
    )
  }
}

export default CartDetails

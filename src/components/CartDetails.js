import { Component } from 'react'

class CartDetails extends Component {
  render() {
    const { cart } = this.props
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
        </ul>
      </div>
    )
  }
}

export default CartDetails

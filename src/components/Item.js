import {Component} from "react";
import Button from './Button'

class Item extends Component {
  render() {
    const { product, addToCart } = this.props
    return (
      <div className="item">
        <img
          className="item-img"
          alt={product.name}
          src={product.img}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCart(product)}>
          Añadir al Carro
        </Button>
      </div>
    )
  }
}

export default Item

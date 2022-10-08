import {Component} from "react";

class Item extends Component {
  render() {
    const { product } = this.props
    return (
      <div className="item">
        <img
          className="item-img"
          alt={product.name}
          src={product.img}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    )
  }
}

export default Item

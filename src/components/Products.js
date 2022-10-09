import { Component } from "react";
import Item from './Item'
import './styles.css'

class Products extends Component {
  render() {
    const { products, addToCart } = this.props
    return (
      <div className="products">
        {products.map( x =>
          <Item
            product={x}
            key={x.name}
            addToCart={addToCart}
          />
        )}
      </div>
    )
  }
}

export default Products

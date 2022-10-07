import { Component } from "react";
import Item from './Item'
import './styles.css'

class Products extends Component {
  render() {
    const { products } = this.props
    return (
      <div className="products">
        {products.map( x =>
          <Item
            product={x}
            key={x.name}
          />
        )}
      </div>
    )
  }
}

export default Products

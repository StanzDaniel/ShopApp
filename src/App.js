import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Harina', price: 3000, img: './products/harina.jpg' },
      { name: 'Arroz', price: 1500, img: './products/arroz.jpg' },
      { name: 'Chocolate', price: 5000, img: './products/chocolate.jpg' },
    ],
    cart: [],
  }

  addToCart = (product) => {
    const { cart } = this.state
    if ( cart.find(x => x.name === product.name) ) {
      const newCart = cart.map(x => x.name === product.name 
        ? ({
          ...product,
          count: x.count + 1,
        })
        : x)
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        count: 1,
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title>Tienda</Title>
          <Products
            products={this.state.products}
            addToCart={this.addToCart}
          />
        </Layout>
      </div>
    )
  }
}

export default App


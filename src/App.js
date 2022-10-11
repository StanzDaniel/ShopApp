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
    isCartVisible: false,
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

  showCart = () => {
    if (!this.state.cart.length) return
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  remove = (item) => {
    const { cart } = this.state
    const newCart = cart.map(x => x.name === item 
      ? ({
        ...x,
        count: x.count - 1,
      })
      : x)
    const filter = newCart.filter(x => x.count > 0)
    if (!filter.length) this.setState({ isCartVisible: false })
    return this.setState({ cart: filter })
  }

  render() {
    return (
      <div>
        <Navbar 
          cart={this.state.cart}
          isCartVisible={this.state.isCartVisible}
          showCart={this.showCart}
          remove={this.remove}
        />
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


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
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title>Tienda</Title>
          <Products
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App


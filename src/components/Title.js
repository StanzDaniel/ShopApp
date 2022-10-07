import {Component} from "react";

class Tittle extends Component {
  render() {
    return (
      <h1>{this.props.children}</h1>
    )
  }
}

export default Tittle

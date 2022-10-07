import {Component} from "react";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout

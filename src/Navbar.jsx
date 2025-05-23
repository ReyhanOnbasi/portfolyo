import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.navRef} className="nav-div nav-div-color">
        <div className="nav-div-inner">
          <button className="author-name">Reyhan Onbasi</button>
          <nav>
            <button onClick={() => (window.location = "#intro")}>
              Ben Kimim?
            </button>
            <button onClick={() => (window.location = "#whatcanido")}>
              Ne Yapabilirim?
            </button>
            <button onClick={() => (window.location = "#portfolio")}>
              Portfolyo
            </button>
            <button onClick={() => (window.location = "#contact")}>
              İletişim
            </button>
          </nav>
          <div className="author-name"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;

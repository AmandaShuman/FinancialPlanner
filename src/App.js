import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="success">
          <div className="container">
            <NavbarBrand href="/">Financial Planning</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
            <NavbarBrand href='/'>
                
            </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

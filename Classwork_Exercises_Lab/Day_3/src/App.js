import './App.css';
import Coffee from './Coffee';
import Pastry from './Pastry';
import Tea from './Tea';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  return (
    <div className="bg-dark text-white">
      <center><h1>iCafe</h1></center>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">iCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Coffee" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.swiggy.com/restaurants/arusuvai-atchaya-chettinad-veg-subramaniam-road-rs-puram-coimbatore-303212?query=Coffee">Ordinary Coffee</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/restaurants/blenders-inc-father-randy-street-rs-puram-coimbatore-50040?query=Mocha+Shake">Mocha</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/restaurants/arusuvai-atchaya-chettinad-veg-subramaniam-road-rs-puram-coimbatore-303212?query=black+coffee">Black Coffee</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tea" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.swiggy.com/restaurants/arusuvai-atchaya-chettinad-veg-subramaniam-road-rs-puram-coimbatore-303212?query=tea">Ordinary Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/restaurants/arusuvai-atchaya-chettinad-veg-subramaniam-road-rs-puram-coimbatore-303212?query=black+tea">Black Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/search?query=Green+Tea">Green Tea</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pasteries" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.swiggy.com/search?query=CAKE">Cake</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/search?query=pie">Pie</NavDropdown.Item>
              <NavDropdown.Item href="https://www.swiggy.com/search?query=donut">Donut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      <h2>Coffee</h2>
      <Coffee coffee="Ordinary Coffee" cprice="20"/>
      <Coffee coffee="Mocha" cprice="50"/>
      <Coffee coffee="Black Coffee" cprice="35"/>
      <h2>Tea</h2>
      <Tea tea="Ordinary Tea" tprice="20"/>
      <Tea tea="Black Tea" tprice="10"/>
      <Tea tea="Green Tea" tprice="25"/>
      <h2>Pasteries</h2>
      <Pastry pastry="Cake" pprice="50"/>
      <Pastry pastry="Pie" pprice="90"/>
      <Pastry pastry="Donut" pprice="40"/>
    </div>
  );
}

export default App;

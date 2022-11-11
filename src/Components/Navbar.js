
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <Navbar  bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="#home">PAGERLAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{display:"flex",justifyContent:"space-between"}}  id="basic-navbar-nav">
          <Nav className="m-2 mx-5" >
            <Nav.Link style={{marginLeft:"3px",fontWeight:"500"}} href="#home mx-5 ">Home</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}}  href="#link ">About</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link ">Features</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link">Screen</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link">Client</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link">Support</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link">Pricing</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontWeight:"500"}} href="#link">Contact</Nav.Link>
            <Button style={{color:"pink", border:"2px solid pink",borderRadius:"50px",fontWeight:"500", width:"150px"}} variant=" mx-5">Start Free Trial</Button>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
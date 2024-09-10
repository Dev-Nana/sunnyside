import logo from '../../assets/icon/logo.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';
import '../../styles.css';

export const Header = () => {
  return (
    <Navbar expand='lg' className='navbar__content'>
      <Container className='container'>
        <Navbar.Brand className='logo' href='#home'><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle className='navbar-dark toggler' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='collapse' id='basic-navbar-nav'>
          <Nav className='nav me-auto'>
            <Nav.Link href='#home' className='link text-white'>About</Nav.Link>
            <Nav.Link href='#link' className='link text-white'>Services</Nav.Link>
            <Nav.Link href='#link' className='link text-white'>Projects</Nav.Link>
            <Button className='btn btn-light rounded-5'>Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
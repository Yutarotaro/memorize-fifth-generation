import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'


function Header(){
	return (
		<header>
			<Navbar className='mb-2' bg="light" expand="lg">
			  <Container>
			    <Navbar.Brand href="#home">5期生を覚えよう！</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="#link">Ranking</Nav.Link>
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
		</header>
	);
}


function Main(){
	return (
		<div id='main'>
			<div id='car'>
				<Carousel className='mb-2'>
				  <Carousel.Item>
				    <img
				      className="d-block w-20"
				      src={`${process.env.PUBLIC_URL}/image/aruno.jpeg`}
				      alt="中西アルノ"
				    />
				    <Carousel.Caption>
				      <h3>中西アルノ</h3>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-20"
				      src={`${process.env.PUBLIC_URL}/image/ioki.jpeg`}
				      alt="Second slide"
				    />

				    <Carousel.Caption>
				      <h3>五百城茉央</h3>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-20"
				      src={`${process.env.PUBLIC_URL}/image/nagi.jpeg`}
				      alt="井上和"
				    />

				    <Carousel.Caption>
				      <h3>井上和</h3>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</div>


			<Button href="/game">Start </Button>

		</div>
	);
}

function Footer() {
  return (
    <footer className="footer fixed-bottom">
        <div className="content has-text-centered">
          <p>
            著作権はわかりません
	    <br></br>
	  <a href="https://github.com/Yutarotaro/memorize-fifth-generation">repo</a>
          </p>
	</div>
      </footer>

  );
}

function App() {
  return (
    <div className="App">
    	<Header />
	<Main />
	<Footer />
    </div>
  );
}


export default App;

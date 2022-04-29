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

const members = [
	{
		id:0,
		src:"/image/aruno.jpeg",
		name:"中西アルノ",
		kana:"なかにしあるの",
	},
	{
		id:1,
		src:"/image/ioki.jpeg",
		name:"五百城茉央",
		kana:"いおきまお",
	},
	{
		id:2,
		src:"/image/nagi.jpeg",
		name:"井上和",
		kana:"いのうえなぎ",
	},
	{
		id:3,
		src:"/image/tomisaka.jpeg",
		name:"冨里奈央",
		kana:"とみさかなお",
	},

];



function Main(){
	return (
		<div id='main'>
			<div id='car'>
				<Carousel className='mb-2' interval={2000}>
					{shuffle(members).map(member =>(
				  		<Carousel.Item>
						    <img
						      className="d-block w-20"
						      src={`${member.src}`}
						    />
						    <Carousel.Caption>
						      <h3>{`${member.name}`}</h3>
						      <h4>{`${member.kana}`}</h4>
						    </Carousel.Caption>
						  </Carousel.Item>
						  ))}
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

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default App;

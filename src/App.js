import React from 'react';
import './App.css';
import CountDown from './countDown'
import {Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './template/NotFound';
import Game from './Game';
import Play from './Play';
import config from './config';


function Header(){
	return (
		<header>
			<Navbar bg="light" expand="lg">
			  <Container>
			    <Navbar.Brand href="/">5期生を覚えよう！</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/ranking">Ranking</Nav.Link>
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
		</header>
	);
}


function Top(){
	const members = config.sample_data;

	return (
		<div id='main'>
			<div id='car'>
				<Carousel className='mt-2 mb-4' interval={2000}>
					{shuffle(members).map(member =>(
				  		<Carousel.Item>
						    <img
						      className="d-block w-20"
						      src={`${member.src}`}
						      alt=""
						    />
						    <Carousel.Caption>
						      <h2>{`${member.name}`}</h2>
						      <h4>{`${member.kana}`}</h4>
						    </Carousel.Caption>
						  </Carousel.Item>
						  ))}
				</Carousel>
			</div>


			<Button href="/game">Play</Button>

		</div>
	);
}

function Footer() {
  return (
    <footer className="footer">
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
	
    	<BrowserRouter>
		<Routes>
			<Route exact path={`/`} element={<Top />}/>
			<Route path={`/game`} element={<Game />} />
			<Route path={`/*`} element={<NotFound />} />
		</Routes>
	</BrowserRouter>

	<Footer/>
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

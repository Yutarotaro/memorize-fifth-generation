import React from 'react';
import './App.css';
import CountDown from './countDown'
import {Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';


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
		src:"/image/tomisato.jpeg",
		name:"冨里奈央",
		kana:"とみさとなお",
	},
	{
		id:4,
		src:"/image/ichinose.jpeg",
		name:"一ノ瀬美空",
		kana:"いちのせみく",
	},
	{
		id:5,
		src:"/image/sugawara.jpeg",
		name:"菅原咲月",
		kana:"すがわらさつき",
	},
	{
		id:6,
		src:"/image/ogawa.jpeg",
		name:"小川彩",
		kana:"おがわあや",
	},
	{
		id:7,
		src:"/image/okuda.jpeg",
		name:"奥田いろは",
		kana:"おくだいろは",
	},
	{
		id:8,
		src:"/image/ikeda.jpeg",
		name:"池田瑛紗",
		kana:"いけだてれさ",
	},
	{
		id:9,
		src:"/image/kawasaki.jpeg",
		name:"川﨑桜",
		kana:"かわさきさくら",
	},

];



function Top(){
	return (
		<div id='main'>
			<div id='car'>
				<Carousel className='mb-2' interval={2000}>
					{shuffle(members).map(member =>(
				  		<Carousel.Item>
						    <img
						      className="d-block w-20"
						      src={`${member.src}`}
						      alt=""
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

function Game(){
	return(
		<div>
		<CountDown />
		</div>

	);
}

function App() {
  return (
    <div className="App">
	<Header />
	
    	<BrowserRouter>
		<Routes>
			<Route path={`/`} element={<Top />} />
			<Route path={`/game`} element={<Game />} />
		</Routes>
	</BrowserRouter>

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

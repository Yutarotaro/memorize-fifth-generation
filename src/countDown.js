import React from 'react';
import Countdown from 'react-countdown';
import {Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap';


const renderer = ({hours, minutes, seconds, completed}) => {
	if(completed){
		return <p> Game </p>
	}else{
		return (

			<h2>{seconds}</h2>
		);
	}
}

const CountDown = () => {
	return (
		<div>
			<Countdown date={Date.now() + 5000} renderer={renderer} />
		</div>
	);
}

export default CountDown;

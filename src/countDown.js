import React from 'react';
import Countdown from 'react-countdown';
import Game from './Game';
import Play from './Play';
import Start from './Start';
import display from './display';

const CountDown = (props) => {
	const renderer = ({hours, minutes, seconds, completed}) => {
		return (completed) ? <Play checked={props.checked}/>:<h2>{seconds}</h2>;
		}

	return (
		<div>
			<h1> {display(props.checked)} </h1>
			<Countdown date={Date.now() + 5000} renderer={renderer} />
		</div>
	);
}


export default CountDown;

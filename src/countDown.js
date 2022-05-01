import React from 'react';
import Countdown from 'react-countdown';
import Play from './Play';
import display from './display';

function CountDown(props){
	const renderer = ({hours, minutes, seconds, completed}) => {
		return (completed) ? <Play checked={props.checked}/>:<h2>{seconds}</h2>;
		}

	return (
		<div>
			{display(props.checked)}
			<Countdown date={Date.now() + 5000} renderer={renderer} />
		</div>
	);
}


export default CountDown;

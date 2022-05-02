import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import CountDown from './countDown';
import {Form, Stack, ButtonGroup, Dropdown , Button, Navbar, Fade} from 'react-bootstrap'
import config from './config'; import display from './display';
import Countdown from 'react-countdown';

//const min = 0;
//const max = 10;
//var index = Math.floor( Math.random() * (max + 1 - min) ) + min ;
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const question_array = shuffle(config.typing_data.member.fifth);

function Stopwatch(props){
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(true);
	let end = false;

	if(props.stop && !end && start){
		setStart((start)=>{
			end = true;
			console.log('OK');
			return false;
		});
	}

	useEffect(() => {
		let interval = null;

		if(start){
			interval = setInterval(()=>{
				setTime(time => time + 10);
				
			}, 10);
		}else{
			clearInterval(interval);
		}

		return () => clearInterval(interval)
	},[start]);

	return (
		<>
		<span>{('00'+(Math.floor((time / 60000) % 60 ))).slice(-2)}:</span>
		<span>{('00'+(Math.floor((time / 1000) % 60 ))).slice(-2)}:</span>
		<span>{('00'+(Math.floor((time / 10) % 100 ))).slice(-2)}</span>
		</>
	);
}







function Play(props){
	const checked = props.checked;
	const [gameCount, setGameCount] = useState(0);
	const [open, setOpen] = useState(true);
	const [correct, setCorrect] = useState(0);




	function Type(props){
		const name_array = [];

		for(var i = 0;i < name.length;++i){
			name_array.push(name[i]);
		}

		return(
			<>
			<h2>
				&nbsp;{name_array.map((name,i)=>(i < correct)?name:"")}	
			</h2>
			</>
		);
	}



	var name = question_array[gameCount].alphabet;
	var img_path = question_array[gameCount].src;

	const processKeyValue = useCallback((e)=>{
			setCorrect((correct)=> {
				if(name[correct] === e.key){
					return correct + 1;
				}
				return correct;
			});
	});

	useEffect(() => {
		document.addEventListener("keydown", processKeyValue, false);
	}, [correct]);



	if(correct === name.length){
		setCorrect(0);
		setGameCount(gameCount+1);
		name = question_array[gameCount].alphabet;
		img_path = question_array[gameCount].src;
	}



	const renderer = ({hours, minutes, seconds, completed}) => {
		return (completed) ? <Fade in={open}><h2>total time</h2></Fade>:<h2 className='text-white'>total time</h2>;}

	let is_end = (gameCount >= config.typing_data.total);

	return(
		<div>
		<Stopwatch stop={is_end} />
		{(!is_end)?
		<>
			<h3>{gameCount+1}/{config.typing_data.total}問</h3>
			<img className="mb-2 mt-2" src={`${img_path}`} width='200px'/>
			<br/><br/>
			<Type className="mb-2" />
			<br/>
			</>
		:
		<>	
			<Countdown date={Date.now() + 1000} renderer={renderer} />
			<Stack gap={2} className="col-md-5 mx-auto">
			  <Button variant="secondary" href="/game">Retry</Button>
			  <Button variant="outline-secondary" href="/">Home</Button>
			</Stack>
		</>
		}
	
		</div>
	);
}


export default Play;

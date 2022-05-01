import React, { useState, useEffect, useCallback } from 'react';
import './Play.css';
import CountDown from './countDown';
import {Form, Stack, ButtonGroup, Dropdown , Button, Navbar, Fade} from 'react-bootstrap'
import config from './config'; import display from './display';
import Countdown from 'react-countdown';






function Play(props){
	const checked = props.checked;
	const [gameCount, setGameCount] = useState(0);
	const [open, setOpen] = useState(true);
	const [correct, setCorrect] = useState(0);


	function Type(props){
		const target_name = props.name;
		const name_array = [];

		for(var i = 0;i < target_name.length;++i){
			name_array.push(target_name[i]);
		}

		return(
			<>
			<h2>
				{name_array.map((name,i)=>(i < correct)?name:"")}	
			</h2>
			</>
		);
	}


	const name = config.sample_data[1].alphabet;
	const img_path = config.sample_data[1].src;

	const processKeyValue = useCallback((e)=>{
			setCorrect((correct)=> {
				if(name[correct] === e.key){
					return correct + 1;
				}
				return correct;
			});
	});


	if(correct === name.length){
		setCorrect(0);
		setGameCount(gameCount+1);
	}

	useEffect(() => {
		document.addEventListener("keydown", processKeyValue, false);
	}, []);


	const renderer = ({hours, minutes, seconds, completed}) => {
		return (completed) ? <Fade in={open}><h2>total time</h2></Fade>:<h2 className='text-white'>total time</h2>;}

	if(gameCount < config.typing_data.total){
		return(
			<div>
			<h3>{gameCount+1}/{config.typing_data.total}問</h3>
			<img className="mb-2 mt-2" src={`${img_path}`} width='200px'/>
			<br/><br/>
			<Type className="mb-2" name={`${name}`} correct={`${correct}`}/>
			<br/>
			</div>
		);
	}else{
		return(
			<div>
			<Countdown date={Date.now() + 1000} renderer={renderer} />
						<Stack gap={2} className="col-md-5 mx-auto">
			  <Button variant="secondary" href="/game">Retry</Button>
			  <Button variant="outline-secondary" href="/">Home</Button>
			</Stack>
			</div>
		);
	}
}


export default Play;

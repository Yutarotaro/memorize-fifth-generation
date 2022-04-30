import React, { useState, useEffect } from 'react';
import './App.css';
import CountDown from './countDown';
import {Form, ButtonGroup, Dropdown ,Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';


const info = [
	{
		id:0,
		label:"1期生",
		is_ready:true,
	},
	{
		id:1,
		label:"2期生",
		is_ready:false,
	},
	{
		id:2,
		label:"3期生",
		is_ready:true,
	},
	{
		id:3,
		label:"4期生",
		is_ready:false,
	},
	{
		id:4,
		label:"5期生",
		is_ready:true,
	},
];

function Game() {
	var [checked, setChecked]  = useState(0);
	const [nowPlay, setNowPlay] = useState(false);

	return (
	    <div>
		  {
		  nowPlay?<CountDown checked={checked}/>
		  :
		<Form>
		    <div className="mb-3">
			  <h4>出題範囲を選択して、start!</h4>
			  {info.map((prop, i)=>(
				  prop.is_ready ?
			      <Form.Check
				inline
				label={`${prop.label}`}
				type="checkbox"
				onChange={()=>{if(checked & (1 << i)){checked -= (1 << i);}else{checked += (1 << i);}console.log(checked);setChecked(checked);}}/>
				:
			      <Form.Check
				inline
				label={`${prop.label}`}
				type="checkbox"
				disabled/>

			  ))}
		    </div>
		</Form>
			}
		  {!nowPlay
				  ?(checked?<Button onClick={()=>{setNowPlay(!nowPlay)}}>start</Button>
				  :<Button disabled>start</Button>):<br/>}

	    </div>
	  );
}




export default Game;

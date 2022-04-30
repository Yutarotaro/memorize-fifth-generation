import React from 'react';
import './App.css';
import CountDown from './countDown';
import {Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

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



function Game() {
  return (
    <div>
	  game
    </div>
  );
}


export default Game;

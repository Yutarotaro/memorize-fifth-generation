import React, { useState, useEffect } from 'react';
import './App.css';
import CountDown from './countDown';
import {Form, ButtonGroup, Dropdown ,Carousel, Button, Navbar, Container, Nav } from 'react-bootstrap'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';


function Start() {
  return (
    <div>
	  <CountDown/>
	  <p>スタート</p>
    </div>
  );
}


export default Start;

import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/game.jsx'
import './styles.css'

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Game />, document.getElementById('main'));
})
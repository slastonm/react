import React from 'react';
import logo from '../assets/logos.jpg';
import './component.css';
import ButtonComponent from './ButtonComponent/Button';
function Info(props) {
    const imgLink = '../assets/react.svg';
    return (
        <div className='info-block'>
           <img src={logo} alt="logo" />
           <ButtonComponent></ButtonComponent>
        </div>
    );
}

export default Info;


import React from 'react';
import './styles/Slider.css'; // Import custom styles
import  MyForm  from './Form';

const Slider = () => {
    return (
            <div className="slider-container ">
            <div className="slider-content">
                <div className="text-content">
                    <p className="phone-number">Call Us <br></br> 07777777</p>
                    <h1>Select Your Technique</h1>
                    <h2>Will be Fast</h2>
                </div>
                <div className='forminHead'>
                    <MyForm />
                </div>
            </div>
        </div>
    );
};

export default Slider;

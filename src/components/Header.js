import React from 'react';
import './styles/Header.css'; // Import custom styles
import  MyForm  from './Form';
const Header = () => {
    return (
            <div className="slider-container ">
            <div className="slider-content">
                <div className="text-content">
                    <h2>щебень </h2>
                    <h2>песок </h2>
                    <h2>чернозем </h2>
                    <h2>крошка </h2>                    
                </div>
                {/* <div className='forminHead'>
                    <MyForm />
                </div> */}
            </div>
        </div>
    );
};

export default Header;

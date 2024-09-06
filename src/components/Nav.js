import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import React, { useState } from 'react';

function Nav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const texnika = useSelector((state) => state.texnika);
    const shinanyut = useSelector((state) => state.shinanyut);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className='nav'>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <ul className={`product-line ${isDropdownOpen ? 'open' : ''}`}>
                {texnika.map(product => (
                    <li key={product.id} onClick={toggleDropdown}>
                        <Link to={`/product/${product.id}/texnika`}>{product.name}</Link>
                    </li>
                ))}
                {shinanyut.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}/shinanyut`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;

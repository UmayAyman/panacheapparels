import React, { useState } from 'react';
import './dropdown.css';

const currencies = [
    { code: 'PKR', name: 'Pakistani Rupee', flag: 'https://flagcdn.com/w40/pk.png' },
    { code: 'USD', name: 'US Dollar', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'EUR', name: 'Euro', flag: 'https://flagcdn.com/w40/eu.png' },
    { code: 'JPY', name: 'Japanese Yen', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'GBP', name: 'British Pound', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'INR', name: 'Indian Rupee', flag: 'https://flagcdn.com/w40/in.png' },
];

const Dropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (currency) => {
        setSelectedCurrency(currency);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <img src={selectedCurrency.flag} alt={selectedCurrency.code} className="flag" />
                {selectedCurrency.code}
                <span className="arrow" style = {{marginLeft: "10px", color: "black"}}>▼</span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    {currencies.map((currency) => (
                        <li
                            key={currency.code}
                            className="dropdown-item"
                            onClick={() => handleSelect(currency)}
                        >
                            <img src={currency.flag} alt={currency.name} className="flag" />
                            <span>{`${currency.name} (${currency.code})`}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;

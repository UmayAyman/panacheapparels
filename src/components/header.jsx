import React, { useEffect, useState } from 'react';

const Header = () => {
    const messages = [
        "GET FREE SHIPPING ON ORDERS ABOVE RS. 4,499/-",
        "Local customers are advised to use Payfast at Checkout! Credit card is available for international customers.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div>
            <nav className='nav'>
                <h1>{messages[currentIndex]}</h1>
            </nav>
        </div>
    );
};

export default Header;


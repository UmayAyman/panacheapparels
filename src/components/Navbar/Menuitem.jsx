import React from "react";

const MenuItem = ({ label }) => {
    return (
        <div className="menu-item">
            {label}
            <span className="dropdown-icon">▼</span>
        </div>
    );
};

export default MenuItem;

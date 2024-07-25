import React, { useState } from 'react';
import { Collapse, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import './style.css';

const Dropdown = ({ handleClickNavigation }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (link) => {
        handleClick();
        handleClickNavigation(link); // Assuming handleClickNavigation function is defined somewhere
    };

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Products" />
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <div className="dropdown-content">
                    <ListItem button onClick={() => handleItemClick('/Products')}>
                        <ListItemText primary="Dropdown Item 1" />
                    </ListItem>
                    <ListItem button onClick={() => handleItemClick('/AnotherLink')}>
                        <ListItemText primary="Dropdown Item 2" />
                    </ListItem>
                    {/* Add more items as needed */}
                </div>
            </Collapse>
        </ListItem>
    );
};

export default Dropdown;

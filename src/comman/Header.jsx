// src/Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  Collapse,
  ListItem,
  List as ListButton,
  ListItemText
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';

import './Header.css';
import logo from '../assets/home/logo.svg'; // Adjust the navlink if necessary

const navItems = [
  { navlink: '/', label: 'Home' },
  {
    label: 'Products',
    dropdown: true,
    menuItems: [
      { navlink: '/products', label: '3M Products' },
      { navlink: '/products2', label: 'Other Products' }
    ]
  },
  { navlink: '/brandpartners', label: 'Brand Partners' },
  { navlink: '/aboutus', label: 'About Us' },
  { navlink: '/contact', label: 'Contact Us' }
];

const COLORS = {
  primaryDark: "#114a5bd1",
  primaryLight: "#fff",
};

const MenuLabel = styled.label`
  border-radius: 50%;
  height: 7%;
  width: calc(2vh + 5vw);
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(${COLORS.primaryDark}, ${COLORS.primaryLight});
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#000")};
  width: 90%;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #000;
    width:  90%;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const ItemLink = styled.a`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  cursor: pointer;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

const Header = () => {

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { // Change 100 to the scroll threshold you need
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClicknavigation = (navigation) => {
    navigate(navigation);
    setClick(!click);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div id="hdrboth">
        <div className="hdrdesktop">
          <div className="logo"><img src={logo} alt="Logo" /></div>
          <nav className="navbar">
            {navItems.map((navItem, index) => (
              <li key={index}>
                {navItem.dropdown ? (
                  <>
                    <span
                      onClick={handleMenuClick}
                      aria-controls={open ? 'true' : 'undefined'}
                      aria-haspopup="true"
                      aria-expanded={open ? 'dropdown-menu' : 'undefined'}
                      className="active"
                      style={{ cursor: 'pointer' }}
                    >
                      {navItem.label} <ArrowDropDownIcon />
                    </span>

                    <Menu
                      id="dropdown-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      {navItem.menuItems.map((menuItem, menuIndex) => (
                        <MenuItem key={menuIndex} onClick={handleMenuClose}>
                          <Link to={menuItem.navlink} className='active-menu'>
                            {menuItem.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Link to={navItem.navlink} className='active' key={index} onClick={openclick}>
                    {navItem.label}
                  </Link>
                )}
              </li>
            ))}
          </nav>
          <div className="contact-us">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      

      <div className="hdrmobile">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
           <Icon clicked={click || undefined}>&nbsp;</Icon> 
        </MenuLabel>
        <NavBackground clicked={click}>&nbsp;</NavBackground>
        <Navigation clicked={click}>
          <List>
            {navItems.map((navItem, index) => (
              <li key={index}>
                {navItem.dropdown ? (
                  <>
                    <ItemLink onClick={handleDropDown}>
                      {navItem.label}
                      {isOpen ? (
                       <ExpandMoreIcon sx={{ fontSize: '50px !important' }} />
                      ) : (
                        <ExpandLessIcon sx={{ fontSize: '50px !important' }} />
                      )}
                    </ItemLink>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <ListButton component="div"  disablePadding  onClick={handleClick}>
                        {navItem.menuItems.map((menuItem, menuIndex) => (
                          <ListItem
                            button
                            key={menuIndex}
                            component={Link}
                            to={menuItem.navlink}
                            sx={{
                              backgroundColor: '#fff',
                              width: '170px',
                              margin: 'auto'
                            }}
                          >
                            <ListItemText primary={menuItem.label} />
                          </ListItem>
                        ))}
                      </ListButton>
                    </Collapse>
                  </>
                ) : (
                  <ItemLink onClick={() => handleClicknavigation(navItem.navlink)}>
                    {navItem.label}
                  </ItemLink>
                )}
              </li>
            ))}
            <li>
              {/* <ItemLink onClick={() => handleClicknavigation("/contact")}>
                Contact Us
              </ItemLink> */}
            </li>
          </List>
        </Navigation>
      </div>
    </header>
  );
};

export default Header;

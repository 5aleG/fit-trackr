import React, { useState, useEffect } from 'react';
import { IoMdHome, IoMdApps, IoIosStats, IoMdPerson } from 'react-icons/io';
import { NavbarContainer, IconWrapper, Icon, PlusIcon } from './navbarStyled';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let timeoutId;

    // Function to handle scroll event
    const handleScroll = () => {
      setIsHidden(true); // Hide the Navbar when the user starts scrolling

      // Clear any existing timeout and set a new timeout of 300 milliseconds
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsHidden(false); // Show the Navbar after 300 milliseconds of no scrolling
      }, 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <NavbarContainer isHidden={isHidden}>
      <IconWrapper>
        <Icon>
          <IoMdHome size={25} />
        </Icon>
        <Icon>
          <IoMdApps size={25} />
        </Icon>
      </IconWrapper>
      <PlusIcon />
      <IconWrapper>
        <Icon>
          <IoIosStats size={25} />
        </Icon>
        <Icon>
          <IoMdPerson size={25} />
        </Icon>
      </IconWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
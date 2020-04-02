import React from 'react';
import styled from 'styled-components';

const MobileMenu = styled.button`
  background: #000;
  border: 0;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  line-height: 150%;
  padding: 7px 14px 8px 14px;
  &.menu-open {
    background: white;
    color: #000;
  }
`

const MenuButton = ({handleClick}) => {
  return (
    <MobileMenu type="button" onClick={handleClick}>
      Menu
    </MobileMenu>
  );
};

export default MenuButton;
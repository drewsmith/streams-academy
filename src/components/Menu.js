import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Cancel from 'react-icons/lib/md/cancel'

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  box-shadow: 0 2px 8px #000000;
  background: #37474F;
  animation: 0.5s ease-out 0s 1 toggleMenu;
`

const CloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  cursor: pointer;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 1.25em;
    color: #FFFFFF;
    a {
      text-decoration: none;
      color: #FFFFFF;
      padding: 10px;
      display: block;
      :hover {
        background: #263238;
      }
    }
  }
`

const navLinks = [
  { display: '.map', path: '/map'},
  { display: '.flatMap', path: '/map'},
  { display: '.reduce', path: '/reduce'},
  { display: '.forEach', path: '/map'}
]

const NavList = ({closeMenu}) => (
  <List>
    {navLinks.map((link, index) => (
      <li key={`li-${index}`}>
        <Link key={`link-${index}`} to={link.path} onClick={closeMenu}>{link.display}</Link>
      </li>
    ))}
  </List>
)

const Menu = ({closeMenu}) => (
  <Nav>
    <CloseWrapper>
      <Cancel color='#B0BEC5' size={24} onClick={closeMenu} />
    </CloseWrapper>
    <NavList closeMenu={closeMenu} />
  </Nav>
)

export default Menu

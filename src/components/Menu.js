import React from 'react'
import styled from 'styled-components'
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
  animation: 1s ease-out 0s 1 toggleMenu;
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
    padding: 10px;
    color: #FFFFFF;
    font-size: 1.25em;
    cursor: pointer;
    :hover {
      background: #263238;
    }
  }
`

const Menu = ({closeMenu}) => (
  <Nav>
    <CloseWrapper>
      <Cancel color='#B0BEC5' size={24} onClick={closeMenu} />
    </CloseWrapper>
    <List>
      <li>.map</li>
      <li>.flatMap</li>
      <li>.reduce</li>
      <li>.forEach</li>
    </List>
  </Nav>
)

export default Menu

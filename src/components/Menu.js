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
`

const CloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  cursor: pointer;
`

const Menu = ({closeMenu}) => (
  <Nav>
    <CloseWrapper>
      <Cancel color='#B0BEC5' size={24} onClick={closeMenu} />
    </CloseWrapper>
  </Nav>
)

export default Menu

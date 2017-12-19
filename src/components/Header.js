import React from 'react'
import styled from 'styled-components'

import { FlexRow } from '../utils/common'
import { Link } from 'react-router-dom'

import Menu from 'react-icons/lib/md/menu'

const Wrapper = styled(FlexRow)`
  padding: 20px;
  color: #FFFFFF;
  justify-content: flex-start;
`

const Title = styled.div`
  flex: 1;
  font-size: .9em;
  font-weight: 100;
  font-size: 48px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, .75);
  font-family: 'Amatic SC', sans-serif;
  text-align: center;
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
`

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = ({showMenu, hideMenu}) => (
  <Wrapper>
    <Hamburger>
      <Menu color='#FFFFFF' size={32} onClick={showMenu} />
    </Hamburger>
    <Title><Link to='/' onClick={hideMenu}>Streams.Academy</Link></Title>
  </Wrapper>
)

export default Header

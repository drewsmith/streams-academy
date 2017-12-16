import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Title = styled.div`
  flex: 1;
  font-size: .9em;
  font-weight: 100;
  font-size: 48px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, .75);
  color: #FFFFFF;
  font-family: 'Amatic SC', sans-serif;
  text-align: center;
`

const Header = () => (
  <Wrapper>
    <Title>Streams.Academy</Title>
  </Wrapper>
)

export default Header

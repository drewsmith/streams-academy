import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Btn = styled.div`
  background: #8BC34A;
  border-bottom: 4px solid #558B2F;
  font-size: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
  text-shadow: 2px 1px 1px #558B2F;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  a {
    color: #FFFFFF;
    text-decoration: none;
    padding:0 100px;
    line-height: 2em;
    text-transform: uppercase;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
`

const Home = () => (
  <Wrapper>
    <div className='container'>
      Here be text
    </div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Btn><Link to='/map'>Get Started</Link></Btn>
    </div>
  </Wrapper>
)

export default Home

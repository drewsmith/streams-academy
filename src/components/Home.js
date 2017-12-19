import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  FlexCol,
  Container,
  Subtitle,
  P,
  A
} from '../utils/common'

const Button = styled.div`
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

const Wrapper = styled(FlexCol)`
  justify-content: 'center';
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => (
  <Wrapper>
    <Subtitle>Streams</Subtitle>
    <Container>
      The <A href='https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html' target='_blank'>streams</A> API was introduced in Java 8.
    </Container>
    <Subtitle>Functional Programming</Subtitle>
    <Container>
      Is my jam
    </Container>
    <ButtonWrapper>
      <Button>
        <Link to='/map'>Get Started</Link>
      </Button>
    </ButtonWrapper>
  </Wrapper>
)

export default Home

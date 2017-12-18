import React, { Component } from 'react'

import styled from 'styled-components'

import CodeBlock from './CodeBlock'
import Spinner from 'react-icons/lib/fa/spinner'

import mapJava from '../snippets/map.java'

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Answer = styled.div`
  flex: 1;
  diplay: flex;
`

const Textarea = styled.textarea`
  background-color: rgba(0, 0, 0, .15);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border: 0;
  color: #FFFFFF;
  width: 90%;
  min-height: 300px;
`

const Loading = () => (
  <Wrapper>
    <Spinner className='spin' color='#8BC34A' size={36} />
  </Wrapper>
)

class MapStream extends Component {
  state = {
    code: null,
    loading: false
  }
  componentDidMount = () => {
    this.setState({ loading: true })
    fetch(mapJava)
      .then(response => response.text())
      .then(code => this.setState({
        code,
        loading: false
      }))
      .catch(console.log)
  }
  render() {
    if(this.state.loading) return (<Loading />)

    return (
      <CodeBlock code={this.state.code} />
    )
  }
}

export default MapStream

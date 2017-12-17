import React, { Component } from 'react'

import styled from 'styled-components'

import CodeBlock from './CodeBlock'
import Spinner from 'react-icons/lib/fa/spinner'

import mapJava from '../snippets/reduce.java'

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`

const Loading = () => (
  <Wrapper>
    <Spinner className='spin' color='#8BC34A' size={36} />
  </Wrapper>
)

class ReduceStream extends Component {
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
  }
  render() {
    if(this.state.loading) return (<Loading />)

    return (<CodeBlock code={this.state.code} />)
  }
}

export default ReduceStream

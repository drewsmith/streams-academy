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
  color: #FFFFFF;
  text-decoration: none;
  padding:0 100px;
  line-height: 2em;
  text-transform: uppercase;
`

const Loading = () => (
  <Wrapper>
    <Spinner className='spin' color='#8BC34A' size={36} />
  </Wrapper>
)

class MapStream extends Component {
  state = {
    code: null,
    loading: false,
    answer: null,
    response: null,
  }
  handleChange = (e) => {
    this.setState({
      e.target.name: e.target.value
    })
  }
  handleSubmit = () => {
    fetch('http://52.0.204.239:8080/submit/map', {
      headers: {
        'Content-Type': 'text/plain'
      },
      method: 'POST',
      body: this.state.answer
    }).then(response => this.setState({response}))
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
      <div>
        <CodeBlock code={this.state.code} />
        <textarea value={this.state.answer} onChange={this.handleChange} />
        <Btn onClick={this.handleSubmit}>SUBMIT</Btn>
        {response && (
          <pre>{this.state.response}</pre>
        )}
      </div>
    )
  }
}

export default MapStream

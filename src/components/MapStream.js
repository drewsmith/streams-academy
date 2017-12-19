import React, { Component } from 'react'

import styled from 'styled-components'

import { FlexRow, FlexCol, Container } from '../utils/common'

import CodeBlock from './CodeBlock'
import Spinner from 'react-icons/lib/fa/spinner'

import { submitMapAnswer, fetchMapTemplate } from '../utils/api'

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`

const Textarea = styled.textarea`
  background-color: rgba(0, 0, 0, .15);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border: 0;
  color: #FFFFFF;
  min-height: 300px;
  flex: 1;
  width: calc(100%-40px);
  font-size: 1.15em;
`

const AnswerWrapper = styled(FlexRow)`
  align-content: stretch;
  margin: 20px;
`
const ActionWrapper = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Button = styled.div`
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
  max-width: 250px;
  display: inline-block;
  :hover {
    border-bottom: 0;
  }
`

const Submit = styled(Button)`
  background: #8BC34A;
  border-bottom: 4px solid #558B2F;
`

const Reset = styled(Button)`
  background: #B0BEC5;
  border-bottom: 4px solid #37474F;
  margin-left: 20px;
`

const TitleWrapper = styled(FlexCol)`
  justify-content: stretch;
  flex: 1;
  h2 {
    font-size: .9em;
    font-weight: 100;
    font-size: 48px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, .75);
    font-family: 'Amatic SC', sans-serif;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
  }
`

const Response = styled(Container)`
  height: 300px;
  max-height: 300px;
  overflow: auto;
`

const Loading = () => (
  <Wrapper>
    <Spinner className='spin' color='#8BC34A' size={36} />
  </Wrapper>
)

const Actions = ({onSubmit, onReset}) => (
  <ActionWrapper>
    <Submit onClick={onSubmit}>SUBMIT</Submit>
    <Reset onClick={onReset}>RESET</Reset>
  </ActionWrapper>
)

class MapStream extends Component {
  state = {
    code: null,
    loading: false,
    answer: '',
    response: null
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleReset = () => {
    this.setState({
      answer: '',
      response: null
    })
  }

  handleSubmit = () => {
    submitMapAnswer(this.state.answer).then(response => this.setState({response}))
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    fetchMapTemplate().then(code => this.setState({
      code,
      loading: false
    }))
  }
  render() {
    if(this.state.loading) return <Loading />

    let {code, answer, response} = this.state
    return (
      <div>
        <CodeBlock code={code} />
        <AnswerWrapper>
          <TitleWrapper>
            <h2>Answer</h2>
            <Textarea name='answer' value={answer} onChange={this.handleChange} />
          </TitleWrapper>
          <TitleWrapper>
            <h2>Response</h2>
            <Response>{response}</Response>
          </TitleWrapper>
        </AnswerWrapper>
        <Actions onSubmit={this.handleSubmit} onReset={this.handleReset} />
      </div>
    )
  }
}

export default MapStream

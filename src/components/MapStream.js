import React, { Component } from 'react'
import CodeBlock from './CodeBlock'

//import { Container } from '../utils/common'

import mapJava from '../snippets/map.java'

class MapStream extends Component {
  state = {
    code: null
  }
  componentDidMount = () => {
    fetch(mapJava)
      .then(response => response.text())
      .then(code => this.setState({code}))
  }
  render() {
    let { code } = this.state
    return (
      <div>
        <CodeBlock code={code} />
      </div>
    )
  }
}

export default MapStream

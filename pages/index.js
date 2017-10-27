import { Component } from 'react'
import Head from '../components/head'
import Tombstone from '../components/tombstone'
import Links from '../components/links'

const phrases = [
  'Wow he\'s so dead!',
  'Holy shit!',
  'That\'s one dead man.',
  'I\'m glad he\'s gone.',
  'Hell yeah, eat that grass!'
]

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { phrase: 0 }
  }

  _nextPhrase = () => {
    this.setState({ phrase: (this.state.phrase + 1) % phrases.length })
  }

  render() {
    return (
      <div>
        <Head />
        <Tombstone onClick={this._nextPhrase} text={phrases[this.state.phrase]} />
        <Links />
        <style jsx>{`
          div {text-align: center;}
          a { color: orange; }
        `}</style>
      </div>
    )
  }
}

import { Component } from 'react'
import Head from '../components/head'
import Tombstone from '../components/tombstone'
import Links from '../components/links'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const defaultPhrases = [
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

  static async getInitialProps() {
    try {
      const res = await fetch('https://docs.google.com/document/d/12FbqSXIfyhmdwJd297nNvyAPPle4k5P1xCPV8b0KX0o/export?format=txt')
      const text = await res.text();
      const phrases = text.trim().split(/\n+/).map((s) => s.trim()).filter((s) => s)
      return { phrases }
    } catch (e) {
      console.error('Failed to get epitaphs, using defaults.', e)
      return { phrases: defaultPhrases }
    }
  }

  _nextPhrase = () => {
    let phrase = (this.props.phrases && this.props.phrases.length)
      ? ((this.state.phrase + 1) % this.props.phrases.length)
      : 0
    this.setState({ phrase })
  }

  render() {
    let text
    if (this.props.phrases.length === 0) {
      text = '¯\\_(ツ)_/¯'
    } else {
      text = this.props.phrases[this.state.phrase]
    }
    return (
      <div>
        <Head />
        <Tombstone onClick={this._nextPhrase} text={text} />
        <Links />
        <style jsx>{`
          div {text-align: center;}
        `}</style>
      </div>
    )
  }
}

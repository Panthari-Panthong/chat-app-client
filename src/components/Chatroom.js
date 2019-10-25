import React from 'react'
import { url } from '../constants'

class Chatroom extends React.Component {
  state = {
    message: []
  }

  source = new EventSource(`${url}/stream`)

  componentDidMount() {
    console.log('component Did Mount of chat room component')
    // console.log('url is:', url)

    this.source.onmessage = event => {
      // console.log("Got a message!", event.data)
      const message = JSON.parse(event.data)
      this.setState({
        message
      })
    }
    console.log("source", this.source);
  }

  render() {
    console.log("local state", this.state)
    return (
      <div>
        <ul>
          {this.state.message.map(message => <li key={message.id}>{message.message}</li>)}
        </ul>
      </div>
    )
  }
}

export default Chatroom


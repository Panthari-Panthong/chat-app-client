import React from 'react'
import { url } from '../constants'
import { connect } from 'react-redux'
import { addMessages } from '../actions'

class Chatroom extends React.Component {
  state = {
    message: []
  }

  source = new EventSource(`${url}/stream`)

  componentDidMount() {
    // console.log('component Did Mount of chat room component')
    // console.log('url is:', url)

    this.source.onmessage = event => {
      // console.log("Got a message!", event.data)
      const message = JSON.parse(event.data)
      this.setState({
        message
      })
      this.props.addMessages(message)
    }
    // console.log("source", this.source);
  }

  render() {
    // console.log("local state", this.state)
    if (!this.props.messages) return "wait for messages"
    return (
      <div className="w3-container">
        <ul className="w3-ul w3-card">
          {this.props.messages.map(message => <li key={message.id}>{message.message}</li>)}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('mstp of chatroom component', state)
  return {
    messages: state.message
  }
}

export default connect(mapStateToProps, { addMessages })(Chatroom)


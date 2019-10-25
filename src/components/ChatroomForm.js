import React from 'react'
import * as request from 'superagent'
import { url } from '../constants'

export default class ChatroomForm extends React.Component {
  state = {
    message: ""
  }

  onChange = (event) => {
    console.log("onChange");
    this.setState({
      message: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("onSubmit of chatroomform")
    request
      .post(`${url}/message`)
      .send({ message: this.state.message })
      .catch(error => console.log("got an error", error))
    this.setState({
      message: " "
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="w3-container">
          <input
            name="messageForm"
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            placeholder="TypeYourMessageHere"
            className="w3-input w3-border"
          >
          </input>
          <button className="w3-btn w3-black" type="submit">Send message</button>
        </form>
      </div>
    )
  }
}
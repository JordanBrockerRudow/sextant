import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card } from '../dashboard/Exhibit';

const endpoint = new W3CWebSocket('ws://localhost:55455');

class Pylon extends Component {
  state = {
    received: null,
    sent: null,
    latency: null
  }
  componentWillMount() {
    endpoint.onopen = () => {
      console.log('Pylon WebSocket Client Connected');
    };
    endpoint.onmessage = (message) => {
      let received = Date.now();
      let sent = message.date;
      let latency = Math.abs(date1 - date2.valueOf());
      this.setState({ received, sent });
      Date.now();
      console.log(message);
      console.log(message.date);
    };
  }
  
  render() {
    return (
      <>
        <Card title="Latency" content={}/>
        
      </>
    );
  }
}

export default Pylon;
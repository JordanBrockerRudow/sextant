import React from 'react';
// eslint-disable-next-line
import axios from 'axios';
//https://www.digitalocean.com/community/tutorials/react-axios-react

export default class IPAddress extends React.Component {
  state = {
    users: {}
  }

  componentDidMount() {
    axios.get(`https://api64.ipify.org?format=json`)
      .then(res => {
        const ipv4 = res.data;
        console.log("componentDidMount - Res.Data.IP", res.data.ip);
        this.setState({ ipv4 });
        console.log("componentDidMount - State", this.state);
        console.log("componentDidMount - State", this.state.ipv4);
      })
  }

  render() {
    console.log("render - State", this.state);
    console.log("render - State", this.state.ipv4);
    return (
      <p class="card-text">
        {
          this.state.ipv4.ip
        }
      </p>
    )
  }
}
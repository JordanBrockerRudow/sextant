import React from 'react';
// eslint-disable-next-line
import axios from 'axios';
//https://www.digitalocean.com/community/tutorials/react-axios-react
// eslint-disable-next-line
import { Card } from '../dashboard/Exhibit';



export default class APIUtil extends React.Component {
  state = {
    ipv6 : "",
    ipv4 : ""
  }

  componentDidMount() {
    axios.get(`https://api64.ipify.org?format=json`)
      .then(res => {
        const ipv6 = res.data.ip;
        console.log("IPv6: ", ipv6);
        this.setState({ ipv6 });
      })

      axios.get(`https://api.ipify.org?format=json`)
      .then(res => {
        const ipv4 = res.data.ip;
        console.log("IPv4: ", ipv4);
        this.setState({ ipv4 });
      })
  }

  render() {
    return (
      <>
        <Card title="IPv4" content={this.state.ipv4} />
        <Card title="IPv6" content={this.state.ipv6} />
      </>
    )
  }
}
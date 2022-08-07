import React from 'react';
// eslint-disable-next-line
import axios from 'axios';
//https://www.digitalocean.com/community/tutorials/react-axios-react
// eslint-disable-next-line
import { Card } from '../dashboard/Exhibit';
import { ipifyURL } from '../shared/ipifyAPI';



export default class APIUtil extends React.Component {
  state = {
    ipv6 : "",
    ipv4 : ""
  }

  componentDidMount() {
    axios.get(ipifyURL.text.ipv6)
      .then(res => {
        const ipv6 = res.data;
        console.log("IPv6: ", ipv6);
        this.setState({ ipv6 });
      })

      axios.get(ipifyURL.text.ipv4)
      .then(res => {
        const ipv4 = res.data;
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
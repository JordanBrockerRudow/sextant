import React from 'react';
// eslint-disable-next-line
import axios from 'axios';
//https://www.digitalocean.com/community/tutorials/react-axios-react

export default class APIUtil extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api64.ipify.org?format=json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <p>
        {
          this.state.persons.ip
        }
      </p>
    )
  }
}
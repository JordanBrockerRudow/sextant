import React from 'react';

function Card(props) {
  return (
    <div className="card text-white bg-dark">
      <div className="card-body">
        {props.content}
      </div>
    </div>
  );
}



class Exhibit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }
  renderCard(i) {
    return (
      <Card content={this.props.content} />
    );
  }




}
export default Exhibit;
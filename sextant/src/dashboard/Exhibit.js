import React from 'react';
// eslint-disable-next-line
export function Card(props) {
  return (
    <div className="card text-white bg-dark">
      <h6 class="card-header">
        {props.title}
      </h6>
      <div className="card-body">
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
}



export function Exhibit(props) {
  if (props.extended && props.cards) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {props.cards.map((card) => (
          <div class="col">
            <Card title={card.title} content={card.content} footer={card.footer}/>
          </div>
         ))}
      </div>
    );
  }
  if (props.cards) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {props.cards.map((card) => (
          <div class="col">
            <Card title={card.title} content={card.content}/>
          </div>
         ))}
      </div>
    );
  }
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4"></div>
    );
}






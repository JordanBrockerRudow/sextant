import React from 'react';
// eslint-disable-next-line
export function Card(props) {
  return (
    <div className="card text-white bg-dark w-50">
      <h5 class="card-header">
        {props.title}
      </h5>
      <div className="card-body">
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
}



export function Exhibit(props) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.cards.map((card) => (
          <div class="col">
            <Card title={card.title} content={card.content}/>
          </div>
         ))}
      </div>
    );
}






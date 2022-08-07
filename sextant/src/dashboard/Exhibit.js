import React from 'react';
// eslint-disable-next-line
export function Card(props) {
  return (
    <div className="card text-white bg-dark w-50">
      <div className="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
}



export function Exhibit(props) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          {props.content}
        </div>
      </div>
    );
}






import React from 'react';
import CardTitle from './CardTitle';

function Card({ title, children }) {
  return (
    <div className="Card">
      <CardTitle title={title} />
      {children}
    </div>
  );
}

export default Card;

import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.length > 0 &&
        robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))}
    </div>
  );
};

export default CardList;

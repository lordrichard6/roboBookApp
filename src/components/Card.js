import React from 'react';
import Tilt from 'react-tilt'

const Card = ({ name, email, id }) => {
  return (

    <Tilt className='Tilt card tc grow br3 pa3 ma2 dib bw2 shadow-5' options={{ max : 20 }}>
      <img alt='robots' src={`https://robohash.org/${id}?size=300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Tilt>
  );
}

export default Card;
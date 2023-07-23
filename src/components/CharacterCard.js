import React from 'react';

const CharacterCard = ({ character }) => {
  const { name, image, status } = character;

  const borderColor = status === 'Alive' ? '#A7CB54' : status === 'Dead' ? 'black' : 'purple';

  return (
    <div className="card">
      <div className="character-card" style={{ borderColor }}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;


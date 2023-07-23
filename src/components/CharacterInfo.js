import React from 'react';

const CharacterInfo = ({ character }) => {
  const { species, origin, episode } = character;

  return (
    <div className="info">
      <p>Species: {species}</p>
      <p>Origin: {origin.name}</p>
      <p>Episodes:</p>
      <ul>
        {episode.map((episode) => (
          <li key={episode}>{episode}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterInfo;

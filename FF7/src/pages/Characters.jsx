import React from 'react';

const images = require.context('../public/CharPortraits', false, /\.png$/);

const Characters = () => {
  return (
    <div>
      {images.keys().map((key) => (
        <img key={key} src={images(key).default} alt={`Character ${key}`} />
      ))}
    </div>
  );
};

export default Characters;

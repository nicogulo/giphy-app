import React from 'react';

const Gif = ({ url, title }) => {
  return (
    <>
      <p>{title}</p>
      <img title={title} src={url} alt={title} />
    </>
  );
};

export default Gif;

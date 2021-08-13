import React from 'react';
import Search from '../components/Search';
import Gif from '../components/Gif';

const SearchGif = () => {
  const [images, setImages] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const getImages = async (query) => {
    const API_KEY = process.env.REACT_APP_GIPHY_KEY;
    const LIMIT = 12;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}`;
    const images = await fetch(endpoint).then((res) => res.json());
    setImages(images.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getImages(query);
  };

  const handleQueryChanges = (e) => setQuery(e.target.value);

  React.useEffect(() => getImages(query), [query]);

  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        handleQueryChanges={handleQueryChanges}
        query={query}
      />
      {images.map((image) => (
        <Gif
          url={image.images.preview_webp.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  );
};

export default SearchGif;

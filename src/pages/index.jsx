import Image from '../components/image';
import SearchBox from '../components/search-box';
import { useEffect, useState } from 'react';
const Index = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getSearchImage('mario').then((data) => {
      setImages(data.data);
      console.log(data);
    });
  }, []);

  const [query, setQuery] = useState('');
  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  //function when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getSearchImage(query).then((data) => {
      //render response to state/DOM
      setImages(data.data);
    });
  };

  // function to get data from API
  const getSearchImage = async (query) => {
    const API_KEY = process.env.REACT_APP_GIPHY_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`;
    const response = await fetch(url).then((data) => data.json());
    return response;
  };
  // return
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <SearchBox
        handleSubmit={handleSubmit}
        query={query}
        handleChange={onSearchChange}
      />
      <div className="imageList">
        {images &&
          images.map((image) => {
            return (
              image.rating === 'g' && (
                <Image
                  key={image.id}
                  title={image.title}
                  url={image.images.fixed_height.url}
                />
              )
            );
          })}
      </div>
    </div>
  );
};

export default Index;

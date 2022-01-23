import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

const U_KEY = `ypkSUeHvHUd9U9ee8sIfHybrUQCgQoGl_5P7P4wucEg`;

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${U_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {images.map((image, i) => (
        <ImageCard image={image} />
      ))}
    </div>
  );
}

export default App;

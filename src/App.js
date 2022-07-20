import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import useFetch from "./hooks/use-fetch";
import "./App.css";

const FLICKR_API_KEY = "471ccbe1c001b68f0e666bc6789092f8";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("mountains");
  const [loadPhotos, isLoading, hasErr] = useFetch();
  const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${query}&per_page=16&format=json&nojsoncallback=1`;

  const searchHandler = query => {
    setQuery(query);
  };

  useEffect(() => {
    loadPhotos({ url: flickrUrl }, data => {
      const photoList = data.photos.photo;
      console.log(photoList);
      setPhotos(photoList);
    });
  }, [flickrUrl, loadPhotos]);

  return (
    <React.Fragment>
      <Header onSearch={searchHandler} />
      <Gallery
        photos={photos}
        title={query}
        loading={isLoading}
        error={hasErr}
      />
    </React.Fragment>
  );
}

export default App;

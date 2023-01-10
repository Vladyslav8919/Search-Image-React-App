import { useState, useEffect } from "react";

const ImageList = ({ term }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=PR69YxseMygL9n3-q7bJKsXcjeu1pz8vk2IbA8I0l4c`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImages(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [term]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {images.results.map((image) => (
          <li key={image.id}>
            <img src={image.urls.regular} />
          </li>
        ))}
      </ul>
    );
  }
};

export default ImageList;

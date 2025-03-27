import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/images") 
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error al obtener imágenes:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Imágenes almacenadas</h2>
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-3" key={index}>
            <ImageCard imageUrl={`http://localhost:5000/uploads/${img}`} imageName={img} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'; // Import icons

const Gallery = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3',
    'https://via.placeholder.com/300?text=Image+4',
    'https://via.placeholder.com/300?text=Image+5',
    'https://via.placeholder.com/300?text=Image+6',
  ]);

  const addImage = () => {
    const newImageURL = `https://via.placeholder.com/300?text=New+Image+${images.length + 1}`;
    setImages([...images, newImageURL]);
  };

  return (
    <div className="gallery-section shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <div className="flex items-center">
          <button className="arrow-button mr-2"><AiOutlineArrowLeft /></button>
          <button className="add-image-button flex items-center" onClick={addImage}>
            <AiOutlinePlus className="mr-2" />
            Add Image
          </button>
          <button className="arrow-button ml-2"><AiOutlineArrowRight /></button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

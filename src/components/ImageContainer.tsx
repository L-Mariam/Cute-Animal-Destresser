import Button from './Button'
import type { PexelsPhoto } from '../types';
import ImageCard from './ImageCard';
import { useState } from 'react'

type ImgContProps = {
  images: PexelsPhoto[];
  onSave: (image: PexelsPhoto) => void;
}

const ImageContainer = ({ images, onSave}: ImgContProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return <p> Loading... </p>;

  const currentImage = images[currentIndex];
  
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  return (
    <div>
      <ImageCard image={ currentImage} />
      <Button 
      text={'❤️ Save'}
      color={'pink'}
      onClick={() => onSave(currentImage)}
      />
            <Button 
      text={'Next'}
      color={'white'}
      onClick={handleNext}
      />
    </div>
  )
}

export default ImageContainer

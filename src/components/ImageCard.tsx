import type { PexelsPhoto } from '../types';

type ImgCardProps = {
  image: PexelsPhoto;
}

const ImageCard = ({ image }: ImgCardProps) => {
  return (
    <div>
      <img 
      src={image.src.medium} 
      alt={image.alt || 'Cute Animal Hatching'}
      className='w-full h-48 object-cover' />
    </div>
  )
}

export default ImageCard

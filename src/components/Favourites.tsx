import ImageCard from './ImageCard';
import type { PexelsPhoto } from '../types';

type FavProps = {
  saved: PexelsPhoto[];
};

const Favourites = ({ saved }: FavProps) => {
  return (
    <div>
     {saved.length > 0 && 
     saved.map((image) => (
        <ImageCard key={image.id} 
        image={image} />
      ))}
    </div>
  )
}

export default Favourites

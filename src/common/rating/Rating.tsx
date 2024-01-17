import React from 'react';
import StarIcon from '@mui/icons-material/Star';

interface RatingProps {
    maxRating: number;
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ maxRating, rating }) => {
    return (
        <div className="mds-rating">
            {[...Array(Math.ceil(rating))].map((elem, index) => (
                <span key={`index-rating-${index}`} className="material-icons mds-rating-active">
                    <StarIcon/>
                </span>
            ))}
            {[...Array(Math.floor(maxRating - rating))].map((elem, index) => (
                <span key={`max-rating-${index}`} className="material-icons">
                    <StarIcon />
                </span>
            ))}
        </div>
    );
};

export default Rating;

import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from '../../../assets/svg/star.svg';
import { ReactComponent as StarOutline } from '../../../assets/svg/star-outline.svg';
import './StarRating.scss';

const StarsRating = ({ maxStars = 5, productRating = 0 }) => {
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        let star;
        if (i < productRating) {
            star = <Star key={i} className='rating__star rating__star--active' data-testid='active-star' />
        } else {
            star = <StarOutline key={i} className='rating__star rating__star--outline' />
        }

        stars.push(star)
    }

    return (
        <div className='rating my-2' data-testid='star-rating'>
            {stars}
        </div>
    );
}

StarsRating.propTypes = {
    maxStars: PropTypes.number,
    productRating: PropTypes.number
}

export default StarsRating;
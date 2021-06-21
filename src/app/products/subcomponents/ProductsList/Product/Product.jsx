import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button'
import StarRating from '../../../../components/StarRating/StarRating';
import './Product.scss';

const Product = ({ active, description, /* id, */ image, name, promo, rating }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={image}
                    className={active ? 'card-img-top' : 'card-img-top card-img-top--inactive'}
                    alt={name}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className='d-flex flex-column'>
                        <StarRating maxStars={5} productRating={rating} />
                        {active ? <Button text='Show details' />
                            : <Button text='Unavailable' disabled />
                        }
                    </div>
                </div>
                {(promo && active) && <div className='card__promo-label'>Promo</div>}
            </div>
        </div>
    );
}

Product.propTypes = {
    active: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    promo: PropTypes.bool,
    rating: PropTypes.number
}

export default Product;
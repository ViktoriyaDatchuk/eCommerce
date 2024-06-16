import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from './Button';
import useCurrentUser from '../user/getCurrentUser';
// import findCustomerCart from '../utils/findCustomerCart';

import createCard from '../utils/createCart';
import updateCart from '../utils/updateCart';
import apiRoot from '../sdk/apiRoot';

// import createOrGetCart from '../user/createCart';
// import apiRoot from '../sdk/apiRoot';

interface CardProps {
  filmId: string;
  filmKey: string;
  imgSrc: string;
  productName: string;
  genre: string;
  price: number;
  discountPrice: number;
  variantId: number;
}

const cardStyle = 'w-80 rounded-md bg-slate-400/10 pb-3 hover:shadow-md hover:shadow-teal-400 hover:cursor-pointer';
const imageStyle = 'rounded-md';
const linkStyle = 'text-teal-400 text-xl hover:underline';
const descriptionStyle = 'text-teal-200';
const priceContainerStyle = 'flex flex-col items-center gap-2 mt-4';
const priceStyle = 'text-decoration-line: line-through text-orange-400 mr-5';
const discountPriceStyle = 'text-red-500 mr-5';

export default function Product({
  filmId,
  filmKey,
  imgSrc,
  productName,
  genre,
  price,
  discountPrice,
  variantId,
}: CardProps) {
  const [isAddMovieToCard, setIsAddMovieToCard] = useState(false);
  const user = useCurrentUser();
  const addToCard = async () => {
    if (user) {
      // const customerCart = await findCustomerCart(user.id);
      // const [cart] = customerCart;
      let responseCustomerCart = await apiRoot.carts().withCustomerId({ customerId: user.id }).get().execute();
      let customerCart = responseCustomerCart.body;
      console.log(customerCart.version);
      if (!customerCart) {
        await createCard(user);
      } else {
        console.log('cart alredy exist');

        const pickedFilm = customerCart.lineItems.find((film) => film.productId === filmId);

        if (pickedFilm) {
          responseCustomerCart = await updateCart(customerCart.id, pickedFilm.id, variantId, 'remove');
          customerCart = responseCustomerCart.body;
        } else {
          responseCustomerCart = await updateCart(customerCart.id, filmId, variantId, 'add');
          customerCart = responseCustomerCart.body;
        }

        console.log(customerCart, 'PRODUCT');
      }
    }

    setIsAddMovieToCard(!isAddMovieToCard);
  };

  return (
    <div className={cardStyle}>
      <div style={{ height: '480px', marginBottom: '10px' }}>
        <img
          className={imageStyle}
          style={{ width: '320px', height: '480px', aspectRatio: '3/4' }}
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="min-h-44 flex flex-col justify-between items-center">
        <Link to={`/movie-collection/${filmKey}`} className={linkStyle}>
          {productName}
        </Link>
        <p className={descriptionStyle}>{genre}</p>
        <div className={priceContainerStyle}>
          <div>
            <span className={priceStyle}>€ {price}</span>
            <span className={discountPriceStyle}>€ {discountPrice}</span>
          </div>
        </div>
        <Button
          text={!isAddMovieToCard ? 'Add to cart' : 'Remove movie'}
          isPrimary={false}
          onClick={addToCard}
          addClass={`max-w-40 w-full  ${isAddMovieToCard ? 'bg-pink-600' : 'bg-orange-600'}`}
        />
      </div>
    </div>
  );
}

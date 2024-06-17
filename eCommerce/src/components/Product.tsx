import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from './Button';
import updateCart from '../utils/updateCart';
import { UserDataLocalStorage } from '../interfaces/userData.interface';
import createCard from '../utils/createCart';
import AddMovieModal from '../pages/Collection/MovieModal';
import apiRoot from '../sdk/apiRoot';

// import findCustomerCart from '../utils/findCustomerCart';

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
  const [isOpen, setIsOpen] = useState(false);

  const userRequest = localStorage.getItem('commercetools_user');
  const cartID = localStorage.getItem('cartID');

  const addToCard = async () => {
    setIsOpen(true);

    if (userRequest) {
      setIsAddMovieToCard((prevState) => !prevState);
      if (!cartID) {
        if (!userRequest) return;

        const user: UserDataLocalStorage = JSON.parse(userRequest);
        await createCard(user.id);
      } else {
        const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
        const { version, id, lineItems } = currentCart.body;

        const picked = lineItems.find((film) => film.productId === filmId);

        if (picked) {
          await updateCart(picked.id, variantId, 'remove', id, version);
        } else {
          await updateCart(filmId, variantId, 'add', id, version);
        }
      }
    }

    // updateCart(filmId, variantId, 'remove');
  };

  return (
    <div className={cardStyle}>
      {!userRequest && isOpen && <AddMovieModal isOpenModal={isOpen} setIsOpenModal={setIsOpen} />}
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

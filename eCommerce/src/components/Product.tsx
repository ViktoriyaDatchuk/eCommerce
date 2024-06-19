import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Cart } from '@commercetools/platform-sdk';
import Button from './Button';
import updateCart from '../utils/updateCart';
import { UserDataLocalStorage } from '../interfaces/userData.interface';
import createCard from '../utils/createCart';
import AddMovieModal from '../pages/Collection/MovieModal';
// import apiRoot from '../sdk/apiRoot';

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
  isPicked?: boolean;
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
  isPicked,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddMovieToCard, setIsAddMovieToCard] = useState(isPicked || false);
  // const [isCart, setIsCart] = useState<string | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);

  // const cartID = localStorage.getItem('cartID');
  const userRequest = localStorage.getItem('commercetools_user');

  useEffect(() => {
    if (isPicked !== undefined) setIsAddMovieToCard(isPicked);
    if (cart) setCart(cart);
  }, [isPicked, cart]);

  useEffect(() => {
    console.log('effect', cart);
    setCart(cart);
    console.log('afterEffect', cart);
  }, [cart]);
  // const fetchCart = async (cartId: string) => {
  //   const currentCart = await apiRoot.carts().withId({ ID: cartId }).get().execute();
  //   setCart(currentCart.body);
  //   return currentCart.body;
  // };
  // console.log('cartID', cartID);

  const addToCard = async () => {
    // setIsCart(cartID);
    setIsOpen(true);

    if (userRequest) {
      setIsAddMovieToCard((prevState) => !prevState);
      console.log(cart);

      if (!cart) {
        const user: UserDataLocalStorage = JSON.parse(userRequest);

        const newCart = await createCard(user.id);
        // setIsCart(newCart.id);
        setCart(newCart);
        console.log('CAAAART NEW', newCart);
        console.log(cart);
        if (cart) {
          console.log('afterEffect3', cart);
          const { version, id } = cart;

          const updatedCart = await updateCart(filmId, variantId, 'add', id, version);
          setCart(updatedCart);
          console.log(cart);
          console.log('afterEffect2', cart);
        }
        console.log('CAAAART', newCart);
      } else {
        const currentCart = cart;

        const { version, id, lineItems } = currentCart;

        const picked = lineItems.find((film) => film.productId === filmId);

        let updatedCart;
        if (picked) {
          updatedCart = await updateCart(picked.id, variantId, 'remove', id, version);
        } else {
          updatedCart = await updateCart(filmId, variantId, 'add', id, version);
        }
        setCart(updatedCart);
      }
    }
  };

  const buttonText = !isAddMovieToCard ? 'Add to cart' : 'Remove movie';
  const buttonClass = `max-w-40 w-full ${isAddMovieToCard ? 'bg-pink-600' : 'bg-orange-600'}`;

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
        <Button text={buttonText} isPrimary={false} onClick={addToCard} addClass={buttonClass} />
      </div>
    </div>
  );
}

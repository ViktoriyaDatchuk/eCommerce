import { LineItem } from '@commercetools/platform-sdk';
import { useState } from 'react';

import apiRoot from '../sdk/apiRoot';
import removeFromCart from '../user/removeFromCat';
import Button from './Button';
import LoadingModal from './LoadingModal';

interface CartItemProps {
  id: string;
  imgLink: string;
  name: string;
  priceValue: string;
  discountedPrice: string;
  totalPrice: string;
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}
const priceStyle = 'text-decoration-line: line-through text-orange-400';
const controlsStyle = 'text-orange-400 text-2xl';
const discountPriceStyle = 'text-red-500';
const labelStyle = 'text-teal-400 text-2xl';
export default function CartItem({
  id,
  imgLink,
  name,
  priceValue,
  discountedPrice,
  totalPrice,
  setLineItems,
}: CartItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const removeMovie = async () => {
    setIsLoading(true);
    const cartID = localStorage.getItem('cartID');
    if (cartID) {
      const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
      const { version } = currentCart.body;
      const update = await removeFromCart(id, cartID, version);
      const { lineItems } = update;
      localStorage.setItem('lineItems', JSON.stringify(lineItems));
      const savedLineItems = localStorage.getItem('lineItems');
      if (savedLineItems && setLineItems) {
        setLineItems(JSON.parse(savedLineItems));
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row flex-wrap">
      {isLoading && <LoadingModal />}
      <img
        src={imgLink}
        alt=""
        style={{ height: '240px', width: '160px', aspectRatio: '3/4', borderRadius: '10px', objectFit: 'cover' }}
      />
      <div className="max-w-4xl w-full flex flex-wrap justify-center gap-5 sm:gap-10">
        <div className={`max-w-60 w-full ${labelStyle}`}>
          <div className="w-full flex justify-center items-center gap-10">
            <p className=" uppercase">{name}</p>
            <div style={{ margin: '20px 0' }}>
              <p className={priceStyle}>€{priceValue}</p>
              <p className={discountPriceStyle}>€{discountedPrice}</p>
            </div>
          </div>
        </div>
        <div className="min-w-52 flex gap-5">
          <div>
            <p className={labelStyle}>quantity</p>
            <div className={controlsStyle} style={{ margin: '20px 0' }}>
              <button type="button">-</button>
              <span className="mx-4">1</span>
              <button type="button">+</button>
            </div>
          </div>
          <div>
            <p className={labelStyle}>total</p>
            <p className={controlsStyle} style={{ margin: '20px 0' }}>
              €{totalPrice}
            </p>
          </div>
        </div>
        <div className="min-w-42">
          <Button text="Remove disc" isPrimary={false} onClick={removeMovie} addClass="max-h-10 bg-pink-600" />
        </div>
      </div>
    </div>
  );
}

import { LineItem } from '@commercetools/platform-sdk';
import { useState } from 'react';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import apiRoot from '../sdk/apiRoot';
import removeFromCart from '../user/removeFromCat';
import Button from './Button';
import LoadingModal from './LoadingModal';
import EditButton from './EditButton';

interface CartItemProps {
  id: string;
  imgLink: string;
  name: string;
  priceValue: string;
  discountedPrice: string;
  totalPrice: string;
  quantity: number;
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
  quantity,
  setLineItems,
}: CartItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const cartID = localStorage.getItem('cartID');

  const removeMovie = async () => {
    setIsLoading(true);

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

  const editQuantity = async (act: string) => {
    if (cartID) {
      const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
      const { version, lineItems } = currentCart.body;

      const currentQuantity = lineItems.find((movie) => movie.id === id);
      console.log('up?', currentCart);
      if (currentQuantity) {
        // const { quantity } = currentQuantity;

        let newQuantity = currentQuantity.quantity;

        if (act === 'up') {
          console.log('UP +1');
          newQuantity = currentQuantity.quantity + 1;
        } else if (currentQuantity.quantity > 1) {
          console.log('UP -1');
          newQuantity = currentQuantity.quantity - 1;
        }

        const response = await apiRoot
          .carts()
          .withId({ ID: cartID })
          .post({
            body: {
              version,
              actions: [
                {
                  action: 'changeLineItemQuantity',
                  lineItemId: id,
                  quantity: newQuantity,
                },
              ],
            },
          })
          .execute();
        const updatedCart = response.body;
        const newLineItems = updatedCart.lineItems;
        console.log('newCart', updatedCart);

        localStorage.setItem('lineItems', JSON.stringify(newLineItems));
        const savedLineItems = localStorage.getItem('lineItems');
        if (savedLineItems && setLineItems) {
          setLineItems(JSON.parse(savedLineItems));
        }
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
              <EditButton icon={faMinus} onClick={() => editQuantity('down')} />
              <span className="mx-4">{quantity}</span>
              <EditButton icon={faPlus} onClick={() => editQuantity('up')} />
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

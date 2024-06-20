import { useState } from 'react';
import { UserDataLocalStorage } from '../interfaces/userData.interface';
import apiRoot from '../sdk/apiRoot';
import addToCart from '../user/addToCart';
import createCard from '../utils/createCart';
import Button from './Button';
// import removeFromCart from '../user/removeFromCat';

interface CartItemProps {
  imgLink: string;
  name: string;
  priceValue: string;
  discountedPrice: string;
  totalPrice: string;
  quantity: number;
  productId: string;
  variantId: number;
}
const priceStyle = 'text-decoration-line: line-through text-orange-400';
const controlsStyle = 'text-orange-400 text-2xl';
const discountPriceStyle = 'text-red-500';
const labelStyle = 'text-teal-400 text-2xl';

export default function CartItem({
  imgLink,
  name,
  priceValue,
  discountedPrice,
  totalPrice,
  quantity,
  productId,
  variantId,
}: CartItemProps) {
  const [quantityItem, setQuantityItem] = useState(quantity);
  const cartID = localStorage.getItem('cartID');
  const userRequest = localStorage.getItem('commercetools_user');

  const decreaseNumber = async () => {
    // if (!cartID) {
    //   if (!userRequest) return;
    //   const user: UserDataLocalStorage = JSON.parse(userRequest);
    //   await createCard(user.id);
    // } else {
    //   const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
    //   const { version, id } = currentCart.body;
    //   setQuantityItem(quantity);
    //   removeFromCart(id, productId, variantId, version, 1);
    // }
  };

  const increaseNumber = async () => {
    if (!cartID) {
      if (!userRequest) return;

      const user: UserDataLocalStorage = JSON.parse(userRequest);
      await createCard(user.id);
    } else {
      const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
      const { version, id } = currentCart.body;
      setQuantityItem(quantity);
      addToCart(id, productId, variantId, version, 1);
    }
  };
  console.log(quantity);

  return (
    <div className="flex flex-col justify-center items-center sm:flex-row flex-wrap">
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
              <button type="button" onClick={decreaseNumber}>
                -
              </button>
              <span className="mx-4">{quantityItem}</span>
              <button type="button" onClick={increaseNumber}>
                +
              </button>
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
          <Button text="Remove disc" isPrimary={false} addClass="max-h-10 bg-pink-600" />
        </div>
      </div>
    </div>
  );
}

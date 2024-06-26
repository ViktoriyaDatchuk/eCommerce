import { LineItem } from '@commercetools/platform-sdk';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CartItem from '../../components/CartItem';
import Page from '../../components/Page';
import apiRoot from '../../sdk/apiRoot';

import { IFormInput } from '../SignUp';
import Button from '../../components/Button';

interface CartProps {
  lineItems?: LineItem[];
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Cart({ lineItems, setLineItems }: CartProps) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const cartID = localStorage.getItem('cartID');
      if (cartID) {
        const currentCart = await apiRoot.carts().withId({ ID: cartID }).get().execute();
        setTotalPrice(currentCart.body.totalPrice.centAmount / 100);
        const savedLineItems = currentCart.body.lineItems;
        if (setLineItems) {
          setLineItems(savedLineItems);
        }
      } else if (setLineItems) {
        const savedLineItems = localStorage.getItem('lineItems');
        if (savedLineItems) {
          setLineItems(JSON.parse(savedLineItems));
        } else {
          setLineItems([]);
        }
      }
    };

    fetchCartData();
  }, [setLineItems]);

  useEffect(() => {
    if (lineItems) {
      const newTotalPrice = lineItems.reduce((total, item) => total + item.totalPrice.centAmount, 0);
      setTotalPrice(newTotalPrice / 100);
    }
  }, [lineItems]);

  const amount = lineItems ? lineItems.length : 0;

  const addPromo = (e: Event) => {
    e.preventDefault();
    console.log('add promo');
  };

  const { handleSubmit } = useForm<Partial<IFormInput>>({});
  const [inputValue, setInputValue] = useState('');

  return (
    <Page amount={amount} setLineItems={setLineItems}>
      <div className="flex flex-col mt-20 gap-10">
        <h1 className=" text-2xl font-bold text-orange-400">Your movies</h1>
        <div className="flex flex-wrap justify-between items-center">
          <form onSubmit={handleSubmit(() => addPromo)} className="flex flex-wrap justify-center items-center gap-5">
            <label htmlFor="promo" className="flex flex-col">
              <input
                className="h-6 px-1 rounded-sm"
                type="text"
                id="promo"
                placeholder="Enter promo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <Button text="add promo" isPrimary submit />
          </form>
          <h2 className="text-2xl uppercase font-bold text-orange-400">
            Total price: {totalPrice} €
            <span />
          </h2>
        </div>
        <div className="flex justify-end">
          <Button text="remove all movies" isPrimary />
        </div>
        {lineItems && lineItems.length > 0 ? (
          lineItems.map((item) => (
            <CartItem
              key={item.productId}
              id={item.id}
              imgLink={item.variant.images![0].url}
              name={item.name['en-US']}
              priceValue={`${item.price.value.centAmount / 100}`}
              discountedPrice={`${item.price.discounted?.value.centAmount ? item.price.discounted.value.centAmount / 100 : 'No discount'}`}
              totalPrice={`${item.totalPrice.centAmount / 100}`}
              setLineItems={setLineItems}
              quantity={item.quantity}
            />
          ))
        ) : (
          <div className="text-white text-2xl">
            <p>Your cart is empty</p>
            <p>
              Go to{' '}
              <Link to="/movie-collection" className="underline text-orange-500">
                Catalog page
              </Link>{' '}
              to add any product
            </p>
          </div>
        )}
      </div>
    </Page>
  );
}

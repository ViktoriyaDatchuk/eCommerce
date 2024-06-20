import { LineItem } from '@commercetools/platform-sdk';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import Page from '../../components/Page';
import apiRoot from '../../sdk/apiRoot';

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

  return (
    <Page amount={amount} setLineItems={setLineItems}>
      <div className="flex flex-col mt-20 gap-10">
        <h1 className=" text-2xl font-bold text-orange-400">Your movies</h1>
        <h2 className="text-lg font-bold text-orange-400">
          Total price: {totalPrice} €
          <span />
        </h2>
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

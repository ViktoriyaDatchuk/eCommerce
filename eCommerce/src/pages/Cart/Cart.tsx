import { LineItem } from '@commercetools/platform-sdk';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CartItem from '../../components/CartItem';
import Page from '../../components/Page';

interface CartProps {
  lineItems?: LineItem[];
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Cart({ lineItems, setLineItems }: CartProps) {
  useEffect(() => {
    const savedLineItems = localStorage.getItem('lineItems');
    if (setLineItems) {
      if (savedLineItems) {
        setLineItems(JSON.parse(savedLineItems));
      } else {
        setLineItems([]);
      }
    }
  }, [setLineItems]);

  const amount = lineItems ? lineItems.length : 0;

  return (
    <Page amount={amount} setLineItems={setLineItems}>
      <div className="flex flex-col mt-20 gap-10">
        <h1 className=" text-2xl font-bold text-orange-400">Your movies</h1>
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

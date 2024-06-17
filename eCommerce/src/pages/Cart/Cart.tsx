import { useState } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import CartItem from '../../components/CartItem';
import Page from '../../components/Page';
import apiRoot from '../../sdk/apiRoot';
import useCurrentUser from '../../user/getCurrentUser';

export default function Cart() {
  const [cartItems, setCartItems] = useState<LineItem[]>();
  const getCart = async () => {
    const user = useCurrentUser();
    if (!user) {
      return;
    }
    const responseCustomerCart = await apiRoot.carts().withCustomerId({ customerId: user.id }).get().execute();
    if (!responseCustomerCart) {
      return;
    }
    setCartItems(responseCustomerCart.body.lineItems);
  };
  getCart();
  return (
    <Page>
      <div className="flex flex-col mt-20 gap-10">
        <h1 className="text-white">CART</h1>
        {cartItems?.map((item) => (
          <CartItem
            key={item.id}
            imgLink={item.variant.images![0].url}
            name={item.name['en-US']}
            priceValue={`${item.price.value.centAmount / 100}`}
            discountedPrice={`${item.price.discounted?.value.centAmount ? item.price.discounted.value.centAmount / 100 : 'No discount'}`}
            totalPrice={`${item.totalPrice.centAmount / 100}`}
          />
        ))}
      </div>
    </Page>
  );
}

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { LineItem } from '@commercetools/platform-sdk';

interface CartContextProps {
  lineItems: LineItem[];
  setLineItems: React.Dispatch<React.SetStateAction<LineItem[]>>;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  return (
    <CartContext.Provider value={{ lineItems, setLineItems, itemCount, setItemCount }}>{children}</CartContext.Provider>
  );
}

function useCart(): CartContextProps {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };

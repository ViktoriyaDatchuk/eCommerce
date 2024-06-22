import { ReactElement } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import Header from './Header/Header';

interface PageProps {
  children: ReactElement;
  amount?: number;
  className?: string;
  withoutHeader?: boolean;
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Page({ children, className, withoutHeader, setLineItems, amount }: PageProps) {
  return (
    <>
      {!withoutHeader && setLineItems ? <Header amount={amount} setLineItems={setLineItems} /> : <Header />}
      <div className={className}>{children}</div>
    </>
  );
}

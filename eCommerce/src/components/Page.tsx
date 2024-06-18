import { ReactElement } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import Header from './Header/Header';

interface PageProps {
  children: ReactElement;
  className?: string;
  withoutHeader?: boolean;
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Page({ children, className, withoutHeader, setLineItems }: PageProps) {
  return (
    <>
      {!withoutHeader && setLineItems ? <Header setLineItems={setLineItems} /> : <Header />}
      <div className={className}>{children}</div>
    </>
  );
}

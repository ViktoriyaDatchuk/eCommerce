import { ReactElement } from 'react';
import Header from './Header/Header';

interface PageProps {
  children: ReactElement;
  className?: string;
  withoutHeader?: boolean;
}

export default function Page({ children, className, withoutHeader }: PageProps) {
  return (
    <>
      {!withoutHeader && <Header />}
      <div className={className}>{children}</div>
    </>
  );
}

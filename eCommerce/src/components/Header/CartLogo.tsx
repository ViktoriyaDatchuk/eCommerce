import { useEffect, useState } from 'react';

interface CartLogoProps {
  amount?: number;
  onClick: () => void;
}

export default function CartLogo({ onClick, amount }: CartLogoProps) {
  const [lineItems, setLineItems] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const storedLineItems = localStorage.getItem('lineItems');
      if (storedLineItems) {
        setLineItems(JSON.parse(storedLineItems).length);
      }
    }, 1000);
  }, [setLineItems]);
  console.log(amount);

  return (
    <button type="button" onClick={onClick}>
      <div>
        {lineItems > 0 && <div className="absolute top-1 text-pink-600 font-bold">{lineItems}</div>}
        <img src="/disc.png" alt="disc" />
      </div>
    </button>
  );
}

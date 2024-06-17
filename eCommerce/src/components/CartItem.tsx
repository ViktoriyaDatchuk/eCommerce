import Button from './Button';

interface CartItemProps {
  imgLink: string;
  name: string;
  priceValue: string;
  discountedPrice: string;
  totalPrice: string;
}
const priceStyle = 'text-decoration-line: line-through text-orange-400';
const controlsStyle = 'text-orange-400 text-2xl';
const discountPriceStyle = 'text-red-500';
const labelStyle = 'text-teal-400 text-2xl';
export default function CartItem({ imgLink, name, priceValue, discountedPrice, totalPrice }: CartItemProps) {
  return (
    <div className="flex flex-row justify-between">
      <img
        src={imgLink}
        alt=""
        style={{ height: '240px', width: '160px', aspectRatio: '3/4', borderRadius: '10px', objectFit: 'cover' }}
      />
      <div className={labelStyle} style={{ width: '240px', paddingTop: '60px' }}>
        <p className=" uppercase">{name}</p>
        <div style={{ margin: '20px 0' }}>
          <p className={priceStyle}>€{priceValue}</p>
          <p className={discountPriceStyle}>€{discountedPrice}</p>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }}>
        <p className={labelStyle}>quantity</p>
        <div className={controlsStyle} style={{ margin: '20px 0' }}>
          <button type="button">-</button>
          <span className="mx-4">1</span>
          <button type="button">+</button>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }}>
        <p className={labelStyle}>total</p>
        <p className={controlsStyle} style={{ margin: '20px 0' }}>
          €{totalPrice}
        </p>
      </div>
      <div style={{ paddingTop: '60px' }}>
        <Button text="Remove disc" isPrimary={false} addClass="max-h-10 bg-pink-600" />
      </div>
    </div>
  );
}

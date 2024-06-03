import { Link } from 'react-router-dom';
import Button from './Button';

interface CardProps {
  filmKey: string;
  imgSrc: string;
  productName: string;
  genre: string;
  price: number;
  discountPrice: number;
}

const cardStyle = 'w-80 rounded-md bg-slate-400/10 pb-3 hover:shadow-md hover:shadow-teal-400 hover:cursor-pointer';
const imageStyle = 'rounded-md';
const linkStyle = 'text-teal-400 text-xl hover:underline';
const descriptionStyle = 'text-teal-200';
const priceContainerStyle = 'mt-4';
const priceStyle = 'text-decoration-line: line-through text-orange-400 mr-5';
const discountPriceStyle = 'text-red-500 mr-5';

export default function Product({ filmKey, imgSrc, productName, genre, price, discountPrice }: CardProps) {
  return (
    <div className={cardStyle}>
      <div style={{ height: '480px', marginBottom: '10px' }}>
        <img
          className={imageStyle}
          style={{ width: '320px', height: '480px', aspectRatio: '3/4' }}
          src={imgSrc}
          alt=""
        />
      </div>
      <div>
        <Link to={`/movie-collection/${filmKey}`} className={linkStyle}>
          {productName}
        </Link>
        <p className={descriptionStyle}>{genre}</p>
        <p className={priceContainerStyle}>
          <span className={priceStyle}>€ {price}</span>
          <span className={discountPriceStyle}>€ {discountPrice}</span>
          <Button text="Add to cart" isPrimary={false} onClick={() => {}} />
        </p>
      </div>
    </div>
  );
}

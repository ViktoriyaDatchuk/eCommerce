import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ClientResponse, Product, Image, Attribute, Price } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';
import Page from '../components/Page';
import Button from '../components/Button';
import Slider from '../components/Slider';
import MovieModal from '../components/MovieModal';
import { currency } from '../data/currency';

interface SelectedFilm {
  images: Image[] | undefined;
  attributes: Attribute[] | undefined;
  prices: Price[] | undefined;
}

export default function MoviePage() {
  const [film, setFilm] = useState({} as SelectedFilm);
  const [modal, setModal] = useState(false);

  const { id } = useParams();

  /* eslint-disable no-use-before-define */
  useEffect(() => {
    getFilm();
  }, []);

  const navigate = useNavigate();

  const containerStyle = 'max-w-[1309px] flex flex-col items-center sm:flex-row sm:items-stretch gap-8 my-4 mx-4';
  const imageStyle = 'max-w-[300px] drop-shadow-[0_4px_30px_rgba(24,201,176,1)]';
  const descriptionContainerStyle = 'flex flex-col justify-between my-1 mx-11';
  const descriptionStyle = 'flex flex-col items-start gap-5 text-white font-medium ml-7 mt-3';
  const parStyle = 'text-left mb-4';
  const secParStyle = 'mt-5 text-start';
  const titleClass = 'text-[#FEA732]';
  const priceContainerStyle = 'flex flex-col md:flex-row gap-8 lg:gap-20 mt-5 font-extrabold';
  const priceBlockStyle = 'flex self-center gap-4 text-base lg:text-2xl';
  const priceStyle = `${titleClass} font-medium`;
  const priceCrossStyle = `${priceStyle} line-through`;

  const getFilm = async () => {
    await apiRoot
      .products()
      .withKey({ key: id! })
      .get()
      .execute()
      .then((response: ClientResponse<Product>) => {
        setFilm({
          images: response.body.masterData.current.masterVariant.images,
          attributes: response.body.masterData.current.masterVariant.attributes,
          prices: response.body.masterData.current.masterVariant.prices,
        });
      })
      .catch(() => console.error);
  };

  const getPrice = (price: number, digit: number, code: string): string => {
    return `${code} ${price / 10 ** digit}`;
  };

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return (
    <Page className="flex justify-center items-center h-max sm:h-full">
      {film.images ? (
        <>
          <div className={containerStyle}>
            <div
              className={imageStyle}
              onClick={(e: React.MouseEvent): void => {
                if ((e.target as HTMLImageElement).alt !== 'arrow') {
                  setModal(true);
                }
              }}
              style={{ width: '300px' }}
            >
              <Slider slides={film.images!} />
            </div>
            <div className={descriptionContainerStyle}>
              <div className={descriptionStyle}>
                <p className={parStyle}>
                  {film.attributes!.find((value: Attribute) => value.name === 'description')?.value}
                </p>
                <p>
                  <span className={titleClass}>Genre: </span>
                  {film.attributes!.find((value: Attribute) => value.name === 'genres')?.value}
                </p>
                <p>
                  <span className={titleClass}>Country: </span>
                  {film.attributes!.find((value: Attribute) => value.name === 'country')?.value}
                </p>
                <p>
                  <span className={titleClass}>Duration: </span>
                  {film.attributes!.find((value: Attribute) => value.name === 'duration')?.value}
                </p>
                <p className={secParStyle}>
                  <span className={titleClass}>Actors: </span>
                  {film.attributes!.find((value: Attribute) => value.name === 'casts')?.value}
                </p>
              </div>
              <div className={priceContainerStyle}>
                <div className={priceBlockStyle}>
                  <p className={film.prices![0].discounted!.value.centAmount ? priceCrossStyle : priceStyle}>
                    {getPrice(
                      film.prices![0].value.centAmount,
                      film.prices![0].value.fractionDigits,
                      currency[film.prices![0].value.currencyCode]
                    )}
                  </p>
                  {film.prices![0].discounted && (
                    <p className="text-[#FC2A66]">
                      {getPrice(
                        film.prices![0].discounted.value.centAmount,
                        film.prices![0].discounted.value.fractionDigits,
                        currency[film.prices![0].discounted.value.currencyCode]
                      )}
                    </p>
                  )}
                </div>
                <Button
                  text="Add disk"
                  isPrimary={false}
                  onClick={() => {
                    console.log('Buy');
                  }}
                  addClass="lg:px-12"
                />
                <Button
                  text="Back"
                  isPrimary={false}
                  onClick={() => {
                    navigate(-1);
                  }}
                  addClass="lg:px-12 lg:ml-[-30px]"
                />
              </div>
            </div>
          </div>
          {modal && (
            <MovieModal
              onClose={() => {
                setModal(false);
              }}
              images={film.images}
            />
          )}
        </>
      ) : (
        <div />
      )}
    </Page>
  );
}

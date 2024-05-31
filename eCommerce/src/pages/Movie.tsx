import Button from '../components/Button';
import Page from '../components/Page';
import { AttributeMovie, movie } from '../data/movies';

export default function Movie() {
  const containerStyle = 'max-w-[1309px] flex flex-col items-center sm:flex-row sm:items-stretch gap-8 my-4 mx-4';
  const imageStyle = 'max-w-[300px] drop-shadow-[0_4px_30px_rgba(24,201,176,1)] rounded-xl';
  const descriptionContainerStyle = 'flex flex-col justify-between my-1 mx-11';
  const descriptionStyle = 'flex flex-col items-start gap-5 text-white font-medium ml-7 mt-3';
  const parStyle = 'text-left mb-4';
  const secParStyle = 'mt-5 text-start';
  const titleClass = 'text-[#FEA732]';
  const priceContainerStyle = 'flex flex-col sm:flex-row gap-8 lg:gap-20 mt-5 font-extrabold';
  const priceBlockStyle = 'flex self-center gap-4 text-base lg:text-2xl';
  const priceStyle = `${titleClass} font-medium`;
  const priceCrossStyle = `${priceStyle} line-through`;

  const getPrice = (price: number, digit: number, code: string): string => {
    return `${price / 10 ** digit} ${code}`;
  };

  return (
    <Page className="flex justify-center items-center h-max sm:h-full">
      <div className={containerStyle}>
        <div>
          <img src={movie.masterData.current.masterVariant.images[0].url} alt="movie" className={imageStyle} />
        </div>
        <div className={descriptionContainerStyle}>
          <div className={descriptionStyle}>
            <p className={parStyle}>
              {
                movie.masterData.current.masterVariant.attributes.find(
                  (value: AttributeMovie) => value.name === 'description'
                )?.value
              }
            </p>
            <p>
              <span className={titleClass}>Genre: </span>drama
            </p>
            <p>
              <span className={titleClass}>Country: </span>
              {
                movie.masterData.current.masterVariant.attributes.find(
                  (value: AttributeMovie) => value.name === 'country'
                )?.value
              }
            </p>
            <p>
              <span className={titleClass}>Duration: </span>
              {
                movie.masterData.current.masterVariant.attributes.find(
                  (value: AttributeMovie) => value.name === 'duration'
                )?.value
              }
            </p>
            <p className={secParStyle}>
              <span className={titleClass}>Actors: </span>
              {
                movie.masterData.current.masterVariant.attributes.find(
                  (value: AttributeMovie) => value.name === 'casts'
                )?.value
              }
            </p>
          </div>
          <div className={priceContainerStyle}>
            <div className={priceBlockStyle}>
              <p
                className={
                  movie.masterData.current.masterVariant.prices[0].discounted.value.centAmount
                    ? priceCrossStyle
                    : priceStyle
                }
              >
                {getPrice(
                  movie.masterData.current.masterVariant.prices[0].value.centAmount,
                  movie.masterData.current.masterVariant.prices[0].value.fractionDigits,
                  movie.masterData.current.masterVariant.prices[0].value.currencyCode
                )}
              </p>
              <p className="text-[#FC2A66]">
                {getPrice(
                  movie.masterData.current.masterVariant.prices[0].discounted.value.centAmount,
                  movie.masterData.current.masterVariant.prices[0].discounted.value.fractionDigits,
                  movie.masterData.current.masterVariant.prices[0].discounted.value.currencyCode
                )}
              </p>
            </div>
            <Button
              text="Add disk"
              isPrimary={false}
              onClick={() => {
                console.log('Buy');
              }}
              addClass="lg:px-12"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

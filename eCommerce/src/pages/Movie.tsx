import Page from '../components/Page';
import { AttributeMovie, movie } from '../data/movies';

export default function Movie() {
  const titleClass = 'text-[#FEA732]';

  return (
    <Page className="flex justify-center items-center h-full">
      <div className="max-w-[1309px] flex gap-8">
        <div>
          <img
            src={movie.masterData.current.masterVariant.images[0].url}
            alt="movie"
            className="max-w-[300px] drop-shadow-[0_4px_30px_rgba(24,201,176,1)] rounded-xl"
          />
        </div>
        <div className="my-5 mx-9">
          <div className="flex flex-col items-start gap-8 text-white font-medium">
            <p className="text-left">
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
            <p className="mt-3">
              <span className={titleClass}>Actors: </span>
              {
                movie.masterData.current.masterVariant.attributes.find(
                  (value: AttributeMovie) => value.name === 'casts'
                )?.value
              }
            </p>
          </div>
          <div />
        </div>
      </div>
    </Page>
  );
}

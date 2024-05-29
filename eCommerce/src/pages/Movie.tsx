import Page from '../components/Page';
import { movie } from '../data/movies';

export default function Movie() {
  return (
    <Page className="flex justify-center items-center h-full">
      <div className="max-w-[1309px]">
        <div>
          <img
            src={movie.masterData.current.masterVariant.images[0].url}
            alt="movie image"
            className="max-w-[300px] drop-shadow-[0_4px_30px_rgba(24,201,176,1)]"
          />
        </div>
        <div></div>
      </div>
    </Page>
  );
}

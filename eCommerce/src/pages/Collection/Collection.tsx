import InfinityScroll from 'react-infinite-scroll-component';

import Page from '../../components/Page';
import useGetMoviesInfinite from './useGetMovies';
import Product from '../../components/Product';

export default function Collection() {
  const { data, isFetching, fetchNextPage, hasNextPage } = useGetMoviesInfinite();

  return (
    <Page>
      <InfinityScroll
        next={fetchNextPage}
        hasMore={hasNextPage}
        dataLength={data?.pages?.flat().length || 0}
        loader
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          columnGap: '20px',
          rowGap: '20px',
          justifyContent: 'center',
          marginTop: '40px',
          paddingBottom: '20px',
        }}
      >
        {data?.pages
          .map((page) => page.results)
          .flat()
          .map((movie) => (
            <Product
              key={movie.id}
              filmKey={movie.key!}
              imgSrc={movie.masterData.current.masterVariant.images![0].url}
              productName={movie.masterData.staged.name['en-US']}
              genre={movie.masterData.current.masterVariant.attributes![4].value}
              price={movie.masterData.current.masterVariant.prices![0].value.centAmount / 100}
              discountPrice={movie.masterData.current.masterVariant.prices![0].discounted!.value.centAmount / 100}
            />
          ))}
        {isFetching && <div className="text-white">loading...</div>}
      </InfinityScroll>
    </Page>
  );
}

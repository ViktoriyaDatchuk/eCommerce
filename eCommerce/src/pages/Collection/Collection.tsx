import InfinityScroll from 'react-infinite-scroll-component';

import Page from '../../components/Page';
import useGetMoviesInfinite from './useGetMovies';
import Product from '../../components/Product';
// import Button from '../../components/Button';

// interface ItemProps {
//   name?: string;
//   id?: string;
//   body?: string;
// }

// function Item({ name, id, body }: ItemProps) {
//   return (
//     <div
//       style={{
//         height: 400,
//         width: '80%',
//         backgroundColor: 'pink',
//       }}
//     >
//       <div>{id}</div>
//       <div>{name}</div>
//       <div>{body}</div>
//     </div>
//   );
// }

export default function Collection() {
  const { data, isFetching, fetchNextPage, hasNextPage } = useGetMoviesInfinite();
  console.log(data);

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
        }}
      >
        {/* {data?.pages.flat().map((movie) => <Item key={movie.id} {...movie} />)} */}
        {data?.pages
          .flat()
          .map((movie) => (
            <Product
              key={movie.id}
              imgSrc={movie.masterData.current.masterVariant.images![0].url}
              productName={movie.masterData.current.name.value}
              genre={movie.masterData.current.masterVariant.attributes![4].value}
              price={movie.masterData.current.masterVariant.prices![0].value.centAmount / 100}
              discountPrice={movie.masterData.current.masterVariant.prices![0].discounted!.value.centAmount / 100}
              year={'1995'}
            />
          ))}
        {isFetching && <div className="text-white">loading...</div>}
      </InfinityScroll>
      {/* <Button text="more" isPrimary onClick={fetchNextPage} /> */}
    </Page>
  );
}

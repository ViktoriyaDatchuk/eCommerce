// import InfinityScroll from 'react-infinite-scroll-component';

import Page from '../../components/Page';
// import { useGetMoviesInfinite } from './useGetMovies';
// import Button from '../../components/Button';

// function Item({ name, id, body }) {
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

// export default function Collection() {
//   const { data, isFetching, fetchNextPage } = useGetMoviesInfinite();
//   console.log(data);

//   return (
//     <Page>
//       <InfinityScroll next={fetchNextPage} hasMore dataLength={data?.pages?.flat().length || 0} loader>
//         {isFetching ? (
//           <div className="text-white">loading...</div>
//         ) : (
//           data?.pages.flat().map((movie) => <Item key={movie.id} {...movie} />)
//         )}
//       </InfinityScroll>
//       {/* <Button text="more" isPrimary onClick={fetchNextPage} /> */}
//     </Page>
//   );
// }

export default function Collection() {
  return (
    <Page>
      <h1>Collection</h1>
    </Page>
  );
}

// export default function Collection() {
//   const { data, isFetching, fetchNextPage } = useGetMoviesInfinite();
//   console.log(data);

//   return (
//     <Page>
//       <InfinityScroll next={fetchNextPage} hasMore dataLength={data?.pages?.flat().length || 0} loader>
//         {data?.pages.flat().map((movie) => <Item key={movie.id} {...movie} />)}
//         {isFetching && <div className="text-white">loading...</div>}
//       </InfinityScroll>
//       {/* <Button text="more" isPrimary onClick={fetchNextPage} /> */}
//     </Page>
//   );
// }

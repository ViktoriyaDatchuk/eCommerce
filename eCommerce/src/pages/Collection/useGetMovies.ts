// import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

// const LIMIT = 5;
// const apiUrl = `https://json-placeholder.mock.beeceptor.com/photos?_start=1&_limit=${LIMIT}`;
// const getApiUrl = (cursor) => `https://jsonplaceholder.typicode.com/comments?_start=${cursor}&_limit=${LIMIT}`;

// const fetchMovies = async ({ pageParam }) => {
//   const res = await fetch(getApiUrl(pageParam));
//   return res.json();
// };

// export default function useGetMovies() {
//   const { isFetching, data } = useQuery({
//     queryFn: () => fetch(apiUrl).then((response) => response.json()),
//     queryKey: ['movies'],
//   });

//   return {
//     movies: data,
//     isFetching,
//   };
// }

// export function useGetMoviesInfinite() {
//   const { isFetching, data, fetchNextPage } = useInfiniteQuery({
//     queryKey: ['movies-infinite'],
//     queryFn: fetchMovies,
//     initialPageParam: 0,
//     getNextPageParam: (lastPage, pages) => {
//       console.log(lastPage);
//       return lastPage.length;
//     },
//   });

//   return { data, isFetching, fetchNextPage };
// }

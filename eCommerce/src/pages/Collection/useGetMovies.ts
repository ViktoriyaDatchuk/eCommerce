import { useInfiniteQuery } from '@tanstack/react-query';

const LIMIT = 5;

const getApiUrl = (cursor: number) => `https://jsonplaceholder.typicode.com/comments?_start=${cursor}&_limit=${LIMIT}`;

const fetchMovies = async ({ pageParam = 0 }) => {
  const res = await fetch(getApiUrl(pageParam));
  return res.json();
};

export default function useGetMoviesInfinite() {
  const { isFetching, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies-infinite'],
    queryFn: fetchMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages);
      return lastPage.length;
    },
  });

  return { data, isFetching, fetchNextPage };
}

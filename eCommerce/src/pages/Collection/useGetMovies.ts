import { useInfiniteQuery } from '@tanstack/react-query';
import apiRoot from '../../sdk/apiRoot';

const LIMIT = 5;

const fetchProductsPage = async (limit: number, offset: number) => {
  const response = await apiRoot.products().get({ queryArgs: { limit, offset } }).execute();

  // console.log(response.body);
  return response.body;
};

// const getApiUrl = (cursor: number) => `https://jsonplaceholder.typicode.com/comments?_start=${cursor}&_limit=${LIMIT}`;

const fetchMovies = async ({ pageParam = 0 }) => {
  // const res = await fetch(getApiUrl(pageParam));
  const res = await fetchProductsPage(LIMIT, pageParam);

  return res.results;
};

export default function useGetMoviesInfinite() {
  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['movies-infinite'],
    queryFn: fetchMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages);
      return lastPage.length;
    },
  });

  return { data, isFetching, fetchNextPage, hasNextPage };
}

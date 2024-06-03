import { useInfiniteQuery } from '@tanstack/react-query';
import apiRoot from '../../sdk/apiRoot';

const LIMIT = 2;

const fetchProductsPage = async (limit: number, offset: number) => {
  const response = await apiRoot.products().get({ queryArgs: { limit, offset } }).execute();

  return response.body;
};

const fetchMovies = async ({ pageParam = 0 }) => {
  const res = await fetchProductsPage(LIMIT, pageParam);

  return res;
};

export default function useGetMoviesInfinite() {
  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['movies-infinite'],
    queryFn: fetchMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const total = pages.map((page) => page.results).flat().length;

      return total < lastPage.total! ? total : undefined;
    },
  });

  return { data, isFetching, fetchNextPage, hasNextPage };
}

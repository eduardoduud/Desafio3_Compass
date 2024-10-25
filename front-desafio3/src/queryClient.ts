import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60, // 1 hora
      staleTime: 1000 * 60 * 30, // 30 minutos
      retry: 3,
    },
  },
});

export default queryClient;

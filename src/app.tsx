import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pokédex" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </HelmetProvider>
  );
}

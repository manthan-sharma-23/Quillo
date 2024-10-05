import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import trpc from "./trpc";
import { httpBatchLink } from "@trpc/react-query";
import { TRPC_ENDPOINT } from "@/global/config";

import Cookies from "universal-cookie";
import { ACCESS_TOKEN_COOKIE } from "./global/cookies";
const router = createRouter({ routeTree });

const cookies = new Cookies();

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: TRPC_ENDPOINT,
      headers: () => ({
        Authorization: `Bearer ${cookies.get(ACCESS_TOKEN_COOKIE)}`,
      }),
    }),
  ],
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </trpc.Provider>
    </StrictMode>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routers/router.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contexts/AuthContexts/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
Aos.init({ startEvent: "DOMContentLoaded" });

// create a new QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);

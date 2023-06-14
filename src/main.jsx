import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/MainRoute";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
// import bgAnimation from "../src/assets/bg-animation1.json";
import bgAnimation0 from "../src/assets/bg-animation.json";
import Lottie from "lottie-react";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <div className="w-full  h-full sm:h-full absolute">
      {/* <Lottie animationData={bgAnimation} loop={true} /> */}
    </div>
    <div className="w-full mt-96 h-full sm:h-full absolute">
      <Lottie animationData={bgAnimation0} loop={true} />
    </div>
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <div className="max-w-screen-xl mx-auto">
              <RouterProvider router={router}></RouterProvider>
            </div>
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);

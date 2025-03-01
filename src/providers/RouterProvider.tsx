import { RouterProvider } from "react-router-dom";
import App from "../App";
import { Toaster } from "react-hot-toast";
import { Toaster as ShadCnToast } from "@components/ui/sonner";

const ReactRouterProvider = () => {
  return (
    <>
      <RouterProvider router={App} />
      <Toaster />
      <ShadCnToast richColors theme="light" />
    </>
  );
};

export default ReactRouterProvider;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TopPage } from "./TopPage";
import { StateForm } from "./StateForm";
import { ResultPage } from "./ResultPage";

export const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<TopPage />} />
      <Route path="/search" element={<StateForm />} />
      <Route path="/search/result/:info" element={<ResultPage />} />
    </>
  )
);

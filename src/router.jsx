import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HeaderLayout from "./layouts";
import SignUp from "./pages/SignUp";
import OpeningPage from "./pages/OpeningPage";
import TransiationPage from "./pages/TransitionPage";


export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OpeningPage />} />
      <Route path="transition" element={<TransiationPage />} />

      <Route path="access" element={<HeaderLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </>
  )
);

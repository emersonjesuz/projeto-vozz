import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HeaderLayout from "./layouts";
import SignUp from "./pages/SignUp";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h1>pagina de carregamento</h1>} />
      <Route path="access" element={<HeaderLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </>
  )
);

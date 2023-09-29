import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HeaderLayout from "./layouts/HeaderLayout";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import CheckPassword from "./pages/CheckPassword";
import Perfil from "./pages/Perfil";
import OpeningPage from "./pages/OpeningPage";
import TransiationPage from "./pages/TransitionPage";
import Onboarding from "./pages/Onboarding";
import NewPassword from "./pages/NewPassword";
import LayoutContextGlobal from "./layouts/GlobalLayout";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LayoutContextGlobal />}>
        <Route path="/" element={<OpeningPage />} />
        <Route path="transition" element={<TransiationPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="access" element={<HeaderLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="register" element={<Register />} />
          <Route path="check-password" element={<CheckPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Route>
    </>
  )
);

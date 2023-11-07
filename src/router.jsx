import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HeaderLayout from "./layouts";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import VerificationCode from "./pages/VerificationCode";
import Perfil from "./pages/Perfil";
import OpeningPage from "./pages/OpeningPage";
import TransiationPage from "./pages/TransitionPage";
import Onboarding from "./pages/Onboarding";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OpeningPage />} />
      <Route path="transition" element={<TransiationPage />} />
      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="access" element={<HeaderLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="code" element={<VerificationCode />} />

        <Route path="perfil" element={<Perfil />} />
      </Route>
    </>
  )
);

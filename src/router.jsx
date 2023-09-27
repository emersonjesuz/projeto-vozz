import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HeaderLayout from "./layouts";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
import Perfil from './pages/Perfil'
=======
import OpeningPage from "./pages/OpeningPage";
import TransiationPage from "./pages/TransitionPage";

>>>>>>> 5e505031eba18430e1386223a18c5c81900e8718

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OpeningPage />} />
      <Route path="transition" element={<TransiationPage />} />

      <Route path="access" element={<HeaderLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </>
  )
);

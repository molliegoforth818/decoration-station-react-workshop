import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./nav/navBar.jsx"
import { NewDecorationForm } from "./forms/new-decoration.jsx";
import DecorationStation from "./components/decoration-station.jsx";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<DecorationStation />} />
        <Route path="new" element={<NewDecorationForm />} />
      </Route>
    </Routes>
  );
};

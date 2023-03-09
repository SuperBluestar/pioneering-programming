import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Main from './layouts/Main';
import NotFound from "./pages/NotFound";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Navigate to="page-1" />} />
        <Route path="page-1" element={<Page1 />} />
        <Route path="page-2" element={<Page2 />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router

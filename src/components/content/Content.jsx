import { Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../assets/routes';
import { Gallery } from '../../pages/Gallery';
import { Home } from '../../pages/Home';

const Content = () => {
  return (
    <div className="content">
      <Outlet />

      <Routes>
        <Route path={ROUTES.home} element={<Home />}>
          Home
        </Route>
        <Route path={ROUTES.gallery} element={<Gallery />}>
          Gallery
        </Route>
      </Routes>
    </div>
  );
};

export default Content;

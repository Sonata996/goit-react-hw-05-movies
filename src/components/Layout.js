import { Outlet } from 'react-router-dom';
import { Navigation } from './Nagation/Navigation';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={<h1>LOADING PAGE...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

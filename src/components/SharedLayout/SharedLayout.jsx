import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
          {children}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

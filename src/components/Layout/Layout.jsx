import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
};

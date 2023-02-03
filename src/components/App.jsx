import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddUserPage } from 'Pages/AddUserPage/AddUserPage';
import { HomePage } from 'Pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};

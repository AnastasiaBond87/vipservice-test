import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SearchPage from '@/pages/SearchPage';
import CardPage from '@/pages/CardPage';
import RootLayout from '@/layouts/RoutLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/avia" />} />
      <Route path="/avia" element={<SearchPage />} />
      <Route path="/avia/info" element={<CardPage />} />
      <Route path="*" element={<Navigate to="/avia" />} />
    </Route>
  )
);

export default router;

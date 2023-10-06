import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SearchPage from '@/pages/SearchPage';
import CardPage from '@/pages/CardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/avia" element={<SearchPage />} />
      <Route path="/avia/info" element={<CardPage />} />
      <Route path="*" element={<Navigate to="/avia" />} />
    </Route>
  )
);

export default router;

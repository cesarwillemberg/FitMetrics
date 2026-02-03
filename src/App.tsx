import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import TbmPage from '@/pages/TbmPage';
import WaterPage from '@/pages/WaterPage';
import CreatinePage from '@/pages/CreatinePage';
import ImcPage from '@/pages/ImcPage';
import IdealWeightPage from '@/pages/IdealWeightPage';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tbm" element={<TbmPage />} />
        <Route path="/imc" element={<ImcPage />} />
        <Route path="/agua" element={<WaterPage />} />
        <Route path="/creatina" element={<CreatinePage />} />
        <Route path="/peso-ideal" element={<IdealWeightPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

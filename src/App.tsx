import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import TbmPage from '@/pages/TbmPage';
import WaterPage from '@/pages/WaterPage';
import CreatinePage from '@/pages/CreatinePage';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tbm" element={<TbmPage />} />
        <Route path="/agua" element={<WaterPage />} />
        <Route path="/creatina" element={<CreatinePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

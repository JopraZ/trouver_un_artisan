import { Routes, Route } from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';

import Alimentation from './pages/alimentation';

import Artisan from './pages/artisan'
import NotFound from './pages/notFound'
import Home from './pages/home';

function App() {
  return (
        <div className="layout">
        
        <Header />

        <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/artisan/:id" element={<Artisan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        </main>

        <Footer />
    </div>
  );
}

export default App;

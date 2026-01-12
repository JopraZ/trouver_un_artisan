import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
      <div className="layout">
      <Header />

      <main className="content">
        {/* Le contenu des pages viendra ici */}
      </main>

      <Footer />
    </div>
  );
}

export default App;

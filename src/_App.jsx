import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros'; // Antes estaba opaco
import ProductGrid from './components/ProductGrid';
import Ventas from './components/Ventas';
import Footer from './components/Footer';
import Contacto from './components/Contacto'; // Antes estaba opaco

function App() {
  return (
    <div className="min-h-screen bg-marfil text-grisProfundo font-sans">
      <Header />
      <main>
        <Hero />
        <Nosotros /> 
        <ProductGrid />
        <Ventas />
        <Contacto /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
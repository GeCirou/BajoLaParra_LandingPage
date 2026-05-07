import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import ProductGrid from './components/ProductGrid';
import Ventas from './components/Ventas';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';

function App() {
    return (
        <div className="min-h-screen bg-marfil text-gris-profundo font-sans">
            <Header />
            <main>
                <Hero />
                <Nosotros /> 
                <ProductGrid />
                <Ventas />
                <Servicios />
                <Contacto /> 
            </main>
            <Footer />
        </div>
    );
}

export default App;

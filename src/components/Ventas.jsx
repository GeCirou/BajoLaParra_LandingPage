import { useState, useEffect } from "react"; // Reincorporamos useEffect
import joya from "../assets/Joyas.png";
import plateria from "../assets/Plateria.png";
import ceramica from "../assets/Ceramica.png";
import prevImg from "../assets/prev.png";
import nextImg from "../assets/next.png";

// Base de datos de las imagenes
const galeria = [
    { src: joya, alt: "Anillo", title: "Anillo de flor de lis", description: "Anillo de plata con diseño de flor de lis, inspirado en la elegancia." },
    { src: plateria, alt: "Mate", title: "Mate con virolas", description: "Mate artesanal hecho con calabaza negra y virolas de alpaca." },
    { src: ceramica, alt: "Plato", title: "Plato floral", description: "Plato de cerámica hecho a mano, decorado con motivos florales." }
];

export default function Ventas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lógica de Swipe
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const handleNext = () => setCurrentIndex((prev) => (prev === galeria.length - 1 ? 0 : prev + 1));
    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? galeria.length - 1 : prev - 1));

    // Control por teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []); 

    // Desplazamiento del swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) handleNext();
        if (distance < -minSwipeDistance) handlePrev();
    };

    return (
        <section id="tienda" className="bg-marfil scroll-mt-6 py-12 md:py-8 border-b border-deep-blue md:min-h-screen flex flex-col justify-center">
            
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-8 px-4">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-deep-blue">Tienda</h2>
                <p className="font-sans text-gris-profundo italic">Piezas únicas disponibles para entrega inmediata.</p>
            </div>

            <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto w-full px-4">
                
                <button 
                    onClick={handlePrev} 
                    className="hidden md:block hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Anterior"
                >
                    <img src={prevImg} alt="Anterior" className="h-14 w-auto opacity-70" />
                </button>

                <div 
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="w-full lg:w-[950px] min-h-[500px] md:min-h-0 grid gap-6 bg-celeste p-8 md:p-12 
                                rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl items-center select-none
                                grid-cols-1 md:grid-cols-2
                                [grid-template-areas:'imagen'_'title'_'description'_'button'_'counter']
                                md:[grid-template-areas:'imagen_title'_'imagen_description'_'imagen_button'_'counter_counter']"
                >
                    
                    <div className="[grid-area:imagen] flex justify-center items-center min-h-0">
                        <img 
                            src={galeria[currentIndex].src} 
                            alt={galeria[currentIndex].alt} 
                            className="max-h-[25vh] md:max-h-[40vh] w-auto object-contain drop-shadow-2xl pointer-events-none" 
                        />
                    </div>

                    <h3 className="[grid-area:title] font-serif text-3xl md:text-5xl text-deep-blue md:text-left self-end">
                        {galeria[currentIndex].title}
                    </h3>

                    <p className="[grid-area:description] text-deep-blue/80 text-lg md:text-xl md:text-left self-start leading-relaxed">
                        {galeria[currentIndex].description}
                    </p>

                    <div className="[grid-area:button] md:text-left">
                        <a href="https://wa.me/5491124921562?text=Hola%20Bajo%20la%20Parra!%0AMe%20interesa%20consultar%20por%20una%20pieza%20personalizada." className="inline-block bg-zafiro px-10 py-4 text-marfil font-serif text-2xl border-2 border-deep-blue rounded-full hover:bg-transparent hover:text-deep-blue transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                            Consultanos
                        </a>
                    </div>

                    <div className="[grid-area:counter] flex justify-center md:justify-end gap-2 self-end mt-4">
                        {galeria.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === idx ? 'w-8 bg-zafiro' : 'w-2 bg-zafiro/30'
                                }`} 
                            />
                        ))}
                    </div>
                </div>

                <button 
                    onClick={handleNext} 
                    className="hidden md:block hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Siguiente"
                >
                    <img src={nextImg} alt="Siguiente" className="h-14 w-auto opacity-70" />
                </button>
            </div>
        </section>
    );
}
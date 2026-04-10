import { useState, useEffect } from "react";

import joya from "../assets/Joyas.png";
import plateria from "../assets/Plateria.png";
import ceramica from "../assets/Ceramica.png";

import prev from "../assets/prev.png";
import next from "../assets/next.png";

const galeria = [
            { src: joya, alt: "Anillo de flor de lis 1", title: "Anillo de flor de lis", description: "Anillo de plata con diseño de flor de lis, inspirado en la elegancia y la historia." },
            { src: plateria, alt: "Mate de calabaza negra con virolas de alpaca", title: "Mate con virolas de alpaca", description: "Mate artesanal hecho con calabaza negra y virolas de alpaca, ideal para los amantes del mate." },
            { src: ceramica, alt: "Plato de arcilla cocida pintado con motivos florales", title: "Plato con motivos florales", description: "Plato de cerámica hecho a mano, decorado con hermosos motivos florales que reflejan la naturaleza." }
    ];

export default function Ventas() {
    const [carrousel, setCarrousel] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === galeria.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? galeria.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setCarrousel(null);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [carrousel, currentIndex]);

    {/* Swipe Gestures */}
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Mínima distancia (en píxeles) para considerar que fue un swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) handleNext();
        if (isRightSwipe) handlePrev();
    };

    return (
        <section id="tienda" className="bg-marfil py-12 md:py-20 px-4 border-b border-deep-blue min-h-screen flex flex-col justify-center">
        
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-deep-blue">Tienda</h2>
                <p className="font-sans text-grisProfundo max-w-2xl mx-auto italic">
                    Selección de obras únicas disponibles. Si una pieza te habla, consultanos para que llegue a tus manos.
                </p>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-6xl mx-auto w-full">
            
                <button 
                    onClick={handlePrev} 
                    className="hidden md:block hover:scale-110 transition-transform p-2"
                >
                    <img src={prev} alt="atrás" className="h-14 w-auto opacity-80" />
                </button>

                {/* Tarjeta de Producto */}
                <div 
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="w-full lg:w-[950px] h-auto min-h-[600px] md:h-[65vh] 
                                grid gap-4 md:gap-10 bg-celeste p-8 md:p-12 
                                rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl items-center
                                [grid-template-areas:var(--grid-tienda-mobile)] 
                                md:[grid-template-areas:var(--grid-tienda-desktop)]
                                grid-cols-1 md:grid-cols-[1.2fr_1fr]
                                overflow-hidden"
                >
                
                    <div className="[grid-area:imagen] h-full w-full flex items-center justify-center overflow-hidden">
                        <img 
                            src={galeria[currentIndex].src} 
                            alt={galeria[currentIndex].alt} 
                            className="max-h-[35vh] md:max-h-full w-full object-contain drop-shadow-2xl transition-all duration-700 ease-in-out" 
                        />
                    </div>

                    <h3 className="[grid-area:title] font-serif text-3xl md:text-5xl text-deep-blue md:text-left self-end">
                        {galeria[currentIndex].title}
                    </h3>

                    <p className="[grid-area:description] font-sans text-deep-blue/80 text-lg md:text-xl md:text-left leading-relaxed self-start">
                        {galeria[currentIndex].description}
                    </p>

                    <div className="[grid-area:button] w-full md:text-left">
                        <button className="w-full md:w-max px-10 bg-zafiro py-4 text-marfil font-serif text-xl border-2 border-transparent rounded-full shadow-lg hover:bg-transparent hover:text-zafiro hover:border-zafiro transition-all duration-300 transform hover:-translate-y-1">
                            Consultanos
                        </button>
                    </div>

                    <div className="[grid-area:counter] flex justify-center md:justify-end gap-3 mt-6 pb-2 md:pb-0 self-end">
                        {galeria.map((_, idx) => (
                            <div 
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === idx 
                                    ? 'w-8 bg-zafiro shadow-[0_0_10px_rgba(0,0,147,0.3)]' 
                                    : 'w-2 bg-zafiro/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <button 
                    onClick={handleNext} 
                    className="hidden md:block hover:scale-110 transition-transform p-2"
                >
                    <img src={next} alt="siguiente" className="h-14 w-auto opacity-80" />
                </button>
            </div>
        </section>
    );
}

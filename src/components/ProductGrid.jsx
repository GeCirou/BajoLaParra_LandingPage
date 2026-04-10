import { useState, useEffect } from "react";

import joya from "../assets/Joyas.png";
import plateria from "../assets/Plateria.png";
import ceramica from "../assets/Ceramica.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

const galeria = [
    [
        { src: joya, alt: "Anillo de flor de lis 1" },
        { src: plateria, alt: "Anillo de flor de lis 2" },
        { src: ceramica, alt: "Anillo de flor de lis 3" }
    ],
    [
        { src: plateria, alt: "Mate con alpaca batida 1" },
        { src: ceramica, alt: "Mate con alpaca batida 2" },
        { src: joya, alt: "Mate con alpaca batida 3" }
    ],
    [
        { src: ceramica, alt: "Plato de cerámica 1" },
        { src: joya, alt: "Plato de cerámica 2" },
        { src: plateria, alt: "Plato de cerámica 3" }
    ]
];

const items = [
    { title: "Joyería de Autor", img: joya, text: "Piezas exclusivas en metales preciosos donde la técnica clásica se funde con el diseño contemporáneo. Cada joya es hecha a mano, transformandose en un tesoro único y personal.", alt: "Anillo de flor de lis" },
    { title: "Platería Criolla y Soguería", img: plateria, text: "Un homenaje a nuestras raíces y a la tradición criolla. Cuchillería de autor, mates y trabajos en cuero que combinan nobles materiales para capturar la esencia del campo argentino.", alt: "Mate con alpaca batida" },
    { title: "Cerámica en Torno", img: ceramica, text: "La arcilla es modelada con paciencia sobre el torno. Creamos objetos funcionales con un diseño que celebra la belleza de lo hecho a mano, aportando la calidez y la calma del taller artesanal a la vida cotidiana.", alt: "Plato de cerámica" }
];

export default function ProductGrid() {
    const [carrousel, setCarrousel] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lógica de Swipe para el Modal
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const handleNext = () => setCurrentIndex((prev) => (prev === carrousel.length - 1 ? 0 : prev + 1));
    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? carrousel.length - 1 : prev - 1));

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

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!carrousel) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setCarrousel(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [carrousel, currentIndex]);

    return (
        <section id="colecciones" className="bg-deep-blue scroll-mt-7 py-8 md:py-4 md:min-h-screen flex items-center px-4 border-b border-deep-blue">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col bg-marfil rounded-tl-3xl rounded-br-3xl p-6 lg:p-8 text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                            
                            {/* Título con altura controlada */}
                            <div className="min-h-[60px] lg:min-h-[80px] flex items-center justify-center mb-2">
                                <h3 className="text-2xl lg:text-3xl font-bold text-deep-blue font-serif leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                            
                            {/* Contenedor de Imagen ajustable */}
                            <div className="flex-grow flex items-center justify-center mb-4 min-h-0">
                                <img 
                                    src={item.img} 
                                    alt={item.alt} 
                                    className="max-h-[22vh] md:max-h-[28vh] w-auto object-contain drop-shadow-xl" 
                                />
                            </div>

                            {/* Descripción */}
                            <div className="mb-4">
                                <p className="text-sm lg:text-base text-justify text-deep-blue leading-relaxed">
                                    {item.text}
                                </p>
                            </div>

                            {/* Botón */}
                            <div className="mt-auto">
                                <button 
                                    onClick={() => { setCarrousel(galeria[index]); setCurrentIndex(0); }}
                                    className="text-zafiro font-bold hover:text-deep-blue cursor-pointer transition-colors text-lg"
                                >
                                    Ver más...
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de Galería Abierta */}
            {carrousel && (
                <div className="fixed inset-0 z-50 bg-deep-blue/95 backdrop-blur-md flex items-center justify-center p-4">
                    <div 
                        className="relative w-full max-w-4xl flex items-center justify-center"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Botón Prev - Escondido en mobile */}
                        <button 
                            onClick={handlePrev} 
                            className="hidden md:flex absolute -left-16 lg:-left-24 hover:scale-110 transition-transform p-4 cursor-pointer"
                        >
                            <img src={prev} alt="Anterior" className="h-16 w-auto" />
                        </button>

                        <div className="flex flex-col items-center select-none">
                            <img 
                                src={carrousel[currentIndex].src} 
                                alt={carrousel[currentIndex].alt} 
                                className="max-h-[65vh] md:max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl pointer-events-none" 
                            />
                            <div className="mt-6 flex flex-col items-center gap-2">
                                <p className="text-marfil font-serif text-lg opacity-80">
                                    {currentIndex + 1} / {carrousel.length}
                                </p>
                                <button
                                    className="mt-2 px-8 py-1 border border-marfil text-marfil rounded-full hover:bg-marfil hover:text-deep-blue transition-all cursor-pointer font-serif"
                                    onClick={() => setCarrousel(null)}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>

                        {/* Botón Next - Escondido en mobile */}
                        <button 
                            onClick={handleNext} 
                            className="hidden md:flex absolute -right-16 lg:-right-24 hover:scale-110 transition-transform p-4 cursor-pointer"
                        >
                            <img src={next} alt="Siguiente" className="h-16 w-auto" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
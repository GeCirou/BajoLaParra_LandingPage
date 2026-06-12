import React, { useState, useEffect, useCallback } from "react";
import { PRODUCTOS } from "../data/productos_venta";
import prevImg from "../assets/prev.webp";
import nextImg from "../assets/next.webp";
import {WSP_NUMBER} from "../data/config.js";
import { useSwipe } from "../hooks/useSwipe.js";

export default function Ventas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === PRODUCTOS.length - 1 ? 0 : prev + 1));
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? PRODUCTOS.length - 1 : prev - 1));
    }, []);

    // Control por teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleNext, handlePrev]); 

    // Lógica de Swipe
    const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe(handleNext, handlePrev);

    // Función para generar el link de WhatsApp dinámico
    const getWspLink = () => {
        const productoActual = PRODUCTOS[currentIndex];
        const nroTelefono = WSP_NUMBER;
        const mensaje = `¡Hola! Vi en la sección de Tienda el *${productoActual.nombre}* y me gustaría consultar por su disponibilidad.`;
        return `https://wa.me/${nroTelefono}?text=${encodeURIComponent(mensaje)}`;
    };

    return (
        <section id="tienda" className="bg-marfil scroll-mt-8 py-12 md:py-8 3xl:py-16 border-b border-deep-blue md:min-h-screen flex flex-col justify-center relative">
            
            <div className="max-w-4xl 3xl:max-w-6xl mx-auto text-center mb-8 md:mb-8 3xl:mb-12 px-4">
                <h2 className="font-serif text-4xl md:text-5xl 3xl:text-6xl mb-4 3xl:mb-6 text-deep-blue uppercase tracking-widest">Tienda</h2>
                <p className="font-sans text-grisProfundo italic 3xl:text-xl">Piezas únicas disponibles para entrega inmediata.</p>
            </div>

            <div className="flex items-center justify-center gap-4 3xl:gap-8 max-w-7xl 3xl:max-w-[1800px] mx-auto w-full px-4 3xl:px-12">
                
                <button 
                    onClick={handlePrev} 
                    className="hidden md:block hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Anterior"
                >
                    <img src={prevImg} alt="Anterior" className="h-14 3xl:h-20 w-auto opacity-70" />
                </button>

                <div 
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="relative w-full lg:w-[1050px] 3xl:w-[1500px] md:h-auto lg:h-[380px] 3xl:h-[520px] min-h-[380px] 3xl:min-h-[520px] flex flex-col md:flex-row gap-0 bg-celeste 
                                rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl items-stretch select-none overflow-hidden"
                >
                    <div className="flex-1 flex justify-center items-center h-auto md:h-full md:border-r md:border-deep-blue/20 p-8 md:p-12 3xl:p-16 min-h-0">
                        <img 
                            src={PRODUCTOS[currentIndex].imagen} 
                            alt={PRODUCTOS[currentIndex].nombre} 
                            className="max-h-[25vh] md:max-h-[300px] 3xl:max-h-[420px] w-auto object-contain drop-shadow-2xl pointer-events-none rounded-2xl" 
                        />
                    </div>

                    <div className="flex-1 flex flex-col h-full justify-between text-left p-8 md:p-12 3xl:p-16 bg-white/10 md:bg-transparent">
                        
                        <div className="flex flex-col gap-4 3xl:gap-6">
                            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl text-deep-blue md:text-left leading-tight">
                                {PRODUCTOS[currentIndex].nombre}
                            </h3>

                            <p className="text-deep-blue/80 text-lg lg:text-xl 3xl:text-2xl md:text-left flex-grow leading-relaxed">
                                {PRODUCTOS[currentIndex].descripcion}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 3xl:gap-8 mt-8 3xl:mt-12">
                            <div className="md:text-left">
                                <a 
                                    href={getWspLink()} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-zafiro px-10 3xl:px-14 py-4 3xl:py-6 text-marfil font-serif text-2xl 3xl:text-3xl border-2 border-deep-blue rounded-full hover:bg-transparent hover:text-deep-blue transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                                >
                                    Consultanos
                                </a>
                            </div>

                            <div className="flex justify-end gap-2 3xl:gap-3 mt-auto md:absolute md:bottom-8 md:right-8 3xl:md:bottom-12 3xl:md:right-12">
                                {PRODUCTOS.map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`h-2 3xl:h-3 rounded-full transition-all duration-300 ${
                                            currentIndex === idx ? 'w-8 3xl:w-12 bg-zafiro' : 'w-2 3xl:w-3 bg-zafiro/30'
                                        }`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={handleNext} 
                    className="hidden md:block hover:scale-110 transition-transform cursor-pointer"
                    aria-label="Siguiente"
                >
                    <img src={nextImg} alt="Siguiente" className="h-14 3xl:h-20 w-auto opacity-70" />
                </button>
            </div>
        </section>
    );
}

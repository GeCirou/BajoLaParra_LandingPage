import { useState, useEffect, useCallback } from "react";
import { PRODUCTOS } from "../data/productos_muestra"; 
import prevImg from "../assets/prev.png";
import nextImg from "../assets/next.png";

const categoriasInfo = [
    {
        id: "joyeria",
        title: "Joyería de Autor",
        text: "Piezas exclusivas en metales preciosos donde la técnica clásica se funde con el diseño contemporáneo.",
        alt: "Joyería"
    },
    {
        id: "plateria",
        title: "Platería Criolla y Soguería",
        text: "Un homenaje a nuestras raíces. Cuchillería de autor y mates que capturan la esencia del campo argentino.",
        alt: "Platería"
    },
    {
        id: "ceramica",
        title: "Cerámica en Torno",
        text: "Objetos funcionales que celebran la belleza de lo hecho a mano, aportando calma al taller artesanal.",
        alt: "Cerámica"
    }
];

const ITEMS_PER_PAGE = 6;

export default function ProductGrid() {
    // 1. Estados (Eliminamos el estado duplicado)
    const [filteredCategoryItems, setFilteredCategoryItems] = useState([]); 
    const [viewMode, setViewMode] = useState("grid"); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [currentGridPage, setCurrentGridPage] = useState(1);

    // 2. DATOS DERIVADOS (Reemplaza al useEffect que daba error de cascading)
    const startIndex = (currentGridPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const activeCategoryItems = filteredCategoryItems.slice(startIndex, endIndex);

    // 3. Paginación de la Grilla
    const totalGridPages = Math.ceil(filteredCategoryItems.length / ITEMS_PER_PAGE);

    const handleNextGridPage = useCallback(() => {
        setCurrentGridPage(prev => (prev >= totalGridPages ? totalGridPages : prev + 1));
    }, [totalGridPages]);
    
    const handlePrevGridPage = useCallback(() => {
        setCurrentGridPage(prev => (prev <= 1 ? 1 : prev - 1));
    }, []);

    // 4. Navegación del Carrusel (Pantalla Completa)
    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === filteredCategoryItems.length - 1 ? 0 : prev + 1));
    }, [filteredCategoryItems.length]);
    
    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? filteredCategoryItems.length - 1 : prev - 1));
    }, [filteredCategoryItems.length]);

    // 5. Lógica de Swipe
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

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

    // 6. Acciones de apertura
    const abrirGrilla = (catId) => {
        const filtradosAll = PRODUCTOS.filter(p => p.categoria === catId);
        if (filtradosAll.length > 0) {
            setFilteredCategoryItems(filtradosAll); 
            setCurrentGridPage(1); 
            setViewMode("grid");
        }
    };

    const abrirProducto = (indexOnPage) => {
        const absoluteIndex = ((currentGridPage - 1) * ITEMS_PER_PAGE) + indexOnPage;
        setCurrentIndex(absoluteIndex);
        setViewMode("carousel");
    };

    // 7. Control por teclado inteligente
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!filteredCategoryItems.length) return;
            
            if (viewMode === "carousel") {
                if (e.key === "ArrowRight") handleNext();
                if (e.key === "ArrowLeft") handlePrev();
                if (e.key === "Escape") setViewMode("grid");
            } else if (viewMode === "grid") {
                if (e.key === "ArrowRight" && currentGridPage < totalGridPages) handleNextGridPage();
                if (e.key === "ArrowLeft" && currentGridPage > 1) handlePrevGridPage();

                if (e.key === "Escape") { 
                    setFilteredCategoryItems([]); // Solo vaciamos este, y el modal se cierra solo
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [filteredCategoryItems.length, viewMode, totalGridPages, currentGridPage, handleNext, handlePrev, handleNextGridPage, handlePrevGridPage]);

    return (
        <section id="colecciones" className="bg-deep-blue scroll-mt-7 py-8 md:py-16 md:min-h-screen flex items-center px-4 border-b border-deep-blue">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
                    {categoriasInfo.map((cat) => {
                        const primerProducto = PRODUCTOS.find(p => p.categoria === cat.id);
                        return (
                            <div key={cat.id} className="flex flex-col bg-marfil rounded-tl-3xl rounded-br-3xl p-6 lg:p-10 text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="min-h-[80px] flex items-center justify-center mb-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-deep-blue font-serif leading-tight">
                                        {cat.title}
                                    </h3>
                                </div>
                                
                                <div className="flex-grow flex items-center justify-center mb-6 min-h-0">
                                    <img 
                                        src={primerProducto?.imagen} 
                                        alt={cat.alt} 
                                        className="rounded-xl max-h-[22vh] md:max-h-[30vh] w-auto object-contain drop-shadow-xl" 
                                    />
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm lg:text-base text-justify text-deep-blue leading-relaxed">
                                        {cat.text}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <button 
                                        onClick={() => abrirGrilla(cat.id)}
                                        className="text-zafiro font-bold hover:text-deep-blue cursor-pointer transition-colors text-lg"
                                    >
                                        Ver catálogo
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Principal (Maneja las 2 vistas) */}
            {filteredCategoryItems.length > 0 && (
                <div className="fixed inset-0 z-50 bg-deep-blue/95 backdrop-blur-md flex items-center justify-center p-4">
                    
                    {/* VISTA 1: GRILLA DE MINIATURAS CON PAGINACIÓN */}
                    {viewMode === "grid" && activeCategoryItems.length > 0 && (
                        <div className="relative w-full max-w-5xl bg-celeste rounded-3xl p-6 lg:p-12 shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col justify-between">
                            
                            <div>
                                <h3 className="text-3xl font-serif text-deep-blue text-center mb-8 uppercase tracking-widest border-b border-deep-blue/20 pb-4">
                                    Catálogo
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
                                    {activeCategoryItems.map((prod, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => abrirProducto(idx)}
                                            className="cursor-pointer group flex flex-col items-center bg-marfil p-5 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-zafiro/30"
                                        >
                                            <div className="h-32 md:h-56 w-full flex items-center justify-center overflow-hidden mb-5">
                                                <img 
                                                    src={prod.imagen} 
                                                    alt={prod.nombre} 
                                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                                                />
                                            </div>
                                            <h4 className="text-center text-deep-blue font-serif font-bold text-sm md:text-lg line-clamp-2 px-2">
                                                {prod.nombre}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CONTROLES DE PAGINACIÓN DE LA GRILLA */}
                            <div className="mt-12 flex flex-col items-center gap-8 border-t border-deep-blue/10 pt-8">
                                <div className="flex items-center gap-6">
                                    <button 
                                        onClick={handlePrevGridPage}
                                        disabled={currentGridPage === 1}
                                        className="p-3 bg-zafiro/10 rounded-full hover:bg-zafiro/20 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                                    >
                                        <img src={prevImg} alt="Pág Anterior" className="h-6 w-auto" />
                                    </button>
                                    <p className="text-deep-blue font-sans italic text-lg">
                                        Página {currentGridPage} de {totalGridPages}
                                    </p>
                                    <button 
                                        onClick={handleNextGridPage}
                                        disabled={currentGridPage === totalGridPages}
                                        className="p-3 bg-zafiro/10 rounded-full hover:bg-zafiro/20 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                                    >
                                        <img src={nextImg} alt="Pág Siguiente" className="h-6 w-auto" />
                                    </button>
                                </div>

                                <button 
                                    onClick={() => setFilteredCategoryItems([])} // Acá limpiamos el otro error
                                    className="px-10 py-3 border-2 border-deep-blue text-deep-blue rounded-full hover:bg-deep-blue hover:text-marfil transition-all font-serif text-lg font-bold"
                                >
                                    Cerrar Catálogo
                                </button>
                            </div>
                        </div>
                    )}

                    {/* VISTA 2: CARRUSEL PANTALLA COMPLETA */}
                    {viewMode === "carousel" && filteredCategoryItems.length > 0 && (
                        <div 
                            className="relative w-full max-w-4xl flex items-center justify-center"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <button onClick={handlePrev} className="hidden md:flex absolute -left-20 lg:-left-28 hover:scale-110 transition-transform p-4 cursor-pointer">
                                <img src={prevImg} alt="Anterior" className="h-16 w-auto" />
                            </button>

                            <div className="flex flex-col items-center select-none text-center">
                                <img 
                                    src={filteredCategoryItems[currentIndex].imagen} 
                                    alt={filteredCategoryItems[currentIndex].nombre} 
                                    className="max-h-[55vh] md:max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl pointer-events-none" 
                                />
                                
                                <div className="mt-4 px-4 bg-marfil/5 rounded-full p-2 max-w-lg">
                                    <h4 className="text-marfil font-serif text-2xl mb-1">
                                        {filteredCategoryItems[currentIndex].nombre}
                                    </h4>
                                    <p className="text-celeste italic text-sm md:text-base">
                                        {filteredCategoryItems[currentIndex].descripcion}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col items-center gap-5">
                                    <p className="text-marfil font-serif text-xl opacity-80 bg-zafiro/20 px-6 py-1 rounded-full">
                                        {currentIndex + 1} / {filteredCategoryItems.length}
                                    </p>
                                    <button
                                        className="px-10 py-2 border-2 border-marfil text-marfil rounded-full hover:bg-marfil hover:text-deep-blue transition-all cursor-pointer font-serif flex items-center gap-2 text-lg font-bold"
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <span className="text-xl leading-none">&larr;</span> Volver a la grilla
                                    </button>
                                </div>
                            </div>

                            <button onClick={handleNext} className="hidden md:flex absolute -right-20 lg:-right-28 hover:scale-110 transition-transform p-4 cursor-pointer">
                                <img src={nextImg} alt="Siguiente" className="h-16 w-auto" />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
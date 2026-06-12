export default function Servicios() {
    const listaServicios = [
        "Reparaciones generales",
        "Enhebrado de collares",
        "Agrandar o achicar anillos",
        "Reemplazo de piedras perdidas",
        "Soldaduras",
        "Limpieza y pulido de piezas"
    ];

    return (
        <section id="servicios" className="bg-celeste py-20 3xl:py-28 px-6 3xl:px-12 scroll-mt-10 border-b border-zafiro/20">
            <div className="max-w-4xl 3xl:max-w-6xl mx-auto">
                {/* Título con la misma estética que Contacto */}
                <div className="text-center mb-12 3xl:mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl 3xl:text-6xl mb-4 3xl:mb-6 text-deep-blue uppercase tracking-widest">
                        Servicios de Taller
                    </h2>
                    <div className="h-1 w-20 3xl:w-28 bg-zafiro mx-auto mb-6 3xl:mb-8"></div>
                    <p className="text-marronCuero font-sans italic text-lg 3xl:text-2xl">
                        Ofrecemos soluciones artesanales para el cuidado y restauración de tus piezas más queridas.
                    </p>
                </div>

                {/* Grilla de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 3xl:gap-6">
                    {listaServicios.map((servicio, index) => (
                        <div 
                            key={index}
                            className="bg-marfil/50 border border-zafiro/30 rounded-tl-2xl rounded-br-2xl p-4 3xl:p-8 flex items-center justify-center transition-all hover:bg-marfil hover:shadow-md"
                        >
                            <span className="font-sans text-lg md:text-xl 3xl:text-2xl font-semibold text-deep-blue tracking-wide uppercase text-center">
                                {servicio}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-12 3xl:mt-16 text-center text-grisProfundo font-sans text-sm 3xl:text-base uppercase tracking-widest italic">
                    — Presupuestos sin cargo en nuestro taller —
                </p>
            </div>
        </section>
    );
}

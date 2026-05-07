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
        <section id="servicios" className="bg-celeste py-20 px-6 scroll-mt-10 border-b border-zafiro/20">
            <div className="max-w-4xl mx-auto">
                {/* Título con la misma estética que Contacto */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-deep-blue mb-4 uppercase tracking-[0.2em]">
                        Servicios de Taller
                    </h2>
                    <div className="h-1 w-20 bg-zafiro mx-auto mb-6"></div>
                    <p className="text-marronCuero font-sans italic text-lg">
                        Ofrecemos soluciones artesanales para el cuidado y restauración de tus piezas más queridas.
                    </p>
                </div>

                {/* Grilla de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {listaServicios.map((servicio, index) => (
                        <div 
                            key={index}
                            className="bg-marfil/50 border border-zafiro/30 rounded-tl-2xl rounded-br-2xl p-4 flex items-center justify-center transition-all hover:bg-marfil hover:shadow-md"
                        >
                            <span className="font-sans text-lg md:text-xl font-semibold text-deep-blue tracking-wide uppercase text-center">
                                {servicio}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-center text-grisProfundo font-sans text-sm uppercase tracking-widest italic">
                    — Presupuestos sin cargo en nuestro taller —
                </p>
            </div>
        </section>
    );
}
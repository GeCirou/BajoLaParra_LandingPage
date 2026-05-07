import fondo from '../assets/fondoHero2.webp'
import mate from '../assets/Mate.webp'

export default function Hero() {
    return (
        <section
            style={{backgroundImage:`url(${fondo})`}}
            className="bg-repeat py-12 px-6 border-b border-dorado-ocre/20 min-h-[80vh] md:h-[87vh] flex items-center"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="font-serif text-5xl lg:text-7xl text-deep-blue mb-6 leading-tight">
                        Orfebrería con alma
                    </h2>
                    <p className="bg-celeste/10 backdrop-blur-md text-black font-sans text-lg lg:text-xl p-8 italic rounded-2xl border-l-8 border-deep-blue mb-8 shadow-sm">
                        Más de 35 años de trabajo nos han enseñado que la verdadera belleza reside en el detalle. En Bajo la Parra, cada obra es un diálogo entre la técnica rigurosa y la herencia artesanal.
                    </p>
                    <a href='#colecciones' className="inline-block bg-zafiro px-10 py-4 text-marfil font-serif text-2xl border-2 border-deep-blue rounded-full hover:bg-transparent hover:text-deep-blue transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                        Descubrí mi Colección
                    </a>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <img
                        src={mate}
                        alt="Mate artesanal"
                        className="h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>
        </section>
    );
}

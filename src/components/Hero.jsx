import mate from '../assets/Mate.webp'

export default function Hero() {
    return (
        <section
            className="bg-celeste lg:bg-linear-to-r from-celeste from-53% to-deep-blue py-12 3xl:py-20 px-6 3xl:px-12 border-b border-dorado-ocre/20 min-h-[80vh] md:h-[87vh] flex items-center"
        >
            <div className="max-w-6xl 3xl:max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 3xl:gap-20 items-center w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="font-serif text-5xl lg:text-6xl 3xl:text-8xl text-deep-blue mb-6 3xl:mb-10 leading-tight">
                        Orfebrería con alma
                    </h2>
                    <p className="bg-celeste/10 backdrop-blur-md text-black font-sans text-lg lg:text-xl 3xl:text-2xl p-8 3xl:p-12 italic rounded-2xl border-l-8 border-deep-blue mb-8 3xl:mb-12 shadow-lg">
                        Más de 35 años de trabajo nos han enseñado que la verdadera belleza reside en el detalle. En Bajo la Parra, cada obra es un diálogo entre la técnica rigurosa y la herencia artesanal.
                    </p>
                    <a href='#colecciones' className="inline-block bg-zafiro px-10 3xl:px-14 py-4 3xl:py-6 text-marfil font-serif text-2xl 3xl:text-3xl border-2 border-deep-blue rounded-full hover:bg-transparent hover:text-deep-blue transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                        Descubrí mi Colección
                    </a>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <img
                        src={mate}
                        alt="Mate artesanal"
                        className="h-[450px] 3xl:h-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>
        </section>
    );
}

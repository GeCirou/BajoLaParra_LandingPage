import fondo from '../assets/fondoHero2.jpg'
import mate from '../assets/Mate.png'

export default function Hero() {
    return (
        <section
            style={{backgroundImage:`url(${fondo})`}}
            className="bg-repeat py-8 px-6 border-b border-doradoOcre/20 min-h-[80vh] flex items-center"
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center w-full">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-serif text-5xl lg:text-6xl text-deep-blue mb-4 [text-shadow:0.5px_0.5px_0_#737373,-0.5px_-0.5px_0_#000093,0.5px_-0.5px_0_#000093,-0.5px_0.5px_0_#000093]">
                        Orfebrería con alma
                    </h2>
                    <p className="bg-celeste/20 backdrop-blur-sm text-black font-sans text-md lg:text-lg p-6 italic rounded-lg border-l-4 border-deep-blue mb-8 shadow-sm mx-auto">
                        Más de 35 años de trabajo nos han enseñado que la verdadera belleza reside en el detalle. En Bajo la Parra, cada obra es un diálogo entre la técnica rigurosa y la herencia artesanal, dando vida a piezas únicas diseñadas para acompañar tu historia y trascender el tiempo.
                    </p>
                    <a type='button' href='#colecciones' className="bg-zafiro px-8 py-3 mt-2 text-marfil font-serif text-2xl border-2 border-deep-blue rounded-3xl outline-none hover:scale-[1.01] hover:bg-transparent hover:text-deep-blue hover:border-zafiro transition-all duration-500">
                        Descubrí mi Colección
                    </a>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <img
                        src={mate}
                        alt="Mate de calabaza negro con detalles cincelados en alpaca."
                        className="h-[350px] object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
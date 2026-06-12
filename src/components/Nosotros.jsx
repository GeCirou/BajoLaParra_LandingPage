import vertical_Marta from "../assets/Nos_Vert_M.webp";
import cuadrado_Marta from "../assets/Nos_Vert_M_1.webp";
import horizontal_Marta from "../assets/Nos_Hor_M.webp";

import vertical_Ge from "../assets/Nos_Vert_G.webp";
import cuadrado_Ge from "../assets/Nos_Vert_G_1.webp";
import horizontal_Ge from "../assets/Nos_Hor_G.webp";

import divider from "../assets/divider.webp"

export default function Nosotros() {
    return (
        <section id="nosotros" className="bg-marfil scroll-mt-10 py-8 3xl:py-16 border-b border-deep-blue text-center">
            <h2 className="font-serif text-4xl md:text-5xl 3xl:text-6xl mb-4 3xl:mb-8 text-deep-blue uppercase tracking-widest">Nosotros</h2>

            <div className="flex flex-col md:flex-row lg:flex-row w-full max-w-7xl 3xl:max-w-[1800px] mx-auto gap-8 3xl:gap-16 items-stretch px-4 md:px-0">
                <div className="md:w-1/2 lg:w-1/2 shrink-0 hidden md:flex lg:order-2">
                    <img
                        src={vertical_Marta}
                        alt="La maestra joyera trabajando con cinceles a su alrededor."
                        className="lg:hidden w-full h-full rounded-lg shadow-lg object-cover"
                    />
                    <img
                        src={horizontal_Marta}
                        alt="La maestra joyera trabajando con cinceles a su alrededor."
                        className="hidden lg:block w-full h-full lg:max-h-[560px] 3xl:max-h-[760px] rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 md:px-4 3xl:px-8 flex flex-col lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 3xl:gap-6 items-stretch mb-4 3xl:mb-6">
                        <img
                            src={cuadrado_Marta}
                            alt="La maestra joyera trabajando con cinceles a su alrededor."
                            className="md:hidden rounded-lg shadow-lg aspect-square object-cover w-full h-full"
                        />
                        <p className="font-sans text-lg 3xl:text-2xl italic font-semibold text-deep-blue text-left leading-relaxed flex items-center">
                            Mi vida es un diálogo constante con los materiales nobles y el tiempo. Aquí el arte le da forma a un oficio que se perfecciona en el taller cada día.
                        </p>
                    </div>
                    <p className="text-grisProfundo text-left md:text-lg 3xl:text-xl leading-relaxed 3xl:leading-loose">
                        Nieta de un joyero correntino. Me inicié en este hermoso oficio de grande junto con mis hijos en el taller de Pedro Ébeke.
                        Más adelante de la mano de Andrea Michaelsen y Lozzi descubrí la platería.
                        En el taller del Maestro Ricardo Rossi me desarrollé en la confección de mates y cuchillos criollos.
                        Con Agustín Martínez descubro la soguería. Esta consiste en la confección de cabos y vainas en cuero crudo sobado.
                        Hoy en día curso el 2do año en la Escuela de Orfebrería del Maestro Emilio Patarca. Simultáneamente perfecciono mi técnica con la Maestra de joyería Nuria Baum.
                        Aprendí escultura en arcilla con Alicia Cabezas y Encaje de Bolillos con María del Carmen Cabezas, acercándome aún más al mundo artístico.
                    </p>
                    <p className="font-script text-2xl 3xl:text-3xl font-semibold text-deep-blue text-left leading-relaxed mt-4 3xl:mt-6">Marta Acevedo</p>
                </div>
            </div>

            <img
                className="md:h-20 3xl:h-28 mx-auto block my-12 3xl:my-20"
                src={divider}
                alt="a line divider with a leaf." />

            <div className="flex flex-col md:flex-row lg:flex-row w-full max-w-7xl 3xl:max-w-[1800px] mx-auto gap-8 3xl:gap-16 items-stretch px-4 md:px-0">
                <div className="w-full md:w-1/2 lg:w-1/2 md:px-4 3xl:px-8 flex flex-col md:order-1 lg:order-2">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 3xl:gap-6 items-stretch mb-4 3xl:mb-6">
                        <p className="font-sans text-lg 3xl:text-2xl italic font-semibold text-deep-blue text-left leading-relaxed flex items-center md:order-1">
                            Mi oficio consiste en construir el puente para que el trabajo de nuestras manos trascienda el taller. Comprendo la nobleza de la materia porque también aprendí a moldearla.
                        </p>
                        <img
                            src={cuadrado_Ge}
                            alt="El aprendiz joyero trabajando en el taller."
                            className="md:hidden rounded-lg shadow-lg aspect-square object-cover w-full h-full"
                        />
                    </div>
                    <p className="text-grisProfundo text-left md:text-lg 3xl:text-xl leading-relaxed 3xl:leading-loose">
                        Formado en el taller de moldeado de Alicia Cabezas, aprendí la paciencia que exige la arcilla antes de transformarse en una pieza terminada. Esa experiencia, sumada al aprendizaje de la joyería en el mismo banco de trabajo de Bajo la Parra, me permitió desarrollar una mirada que une lo tangible con lo virtual. Aunque hoy mi labor principal es el desarrollo web y la arquitectura digital, mi trabajo se nutre de esa vivencia directa con el oficio: entiendo el esfuerzo del artesano porque crecí en ese mismo espacio creativo.
                        <br /><br />
                        Mi compromiso es asegurar que la esencia de nuestra herencia familiar encuentre su lugar en el mundo digital, cuidando que todos puedan ver la calidez de lo hecho por nuestras manos.
                    </p>
                    <p className="font-script text-2xl 3xl:text-3xl font-semibold text-deep-blue text-left leading-relaxed mt-4 3xl:mt-6">Gerardo Cirou Acevedo</p>
                </div>
                <div className="md:w-1/2 lg:w-1/2 shrink-0 hidden md:flex md:order-2 lg:order-1">
                    <img
                        src={vertical_Ge}
                        alt="El aprendiz joyero trabajando en el taller."
                        className="lg:hidden w-full h-full rounded-lg shadow-lg object-cover"
                    />
                    <img
                        src={horizontal_Ge}
                        alt="El aprendiz joyero trabajando en el taller."
                        className="hidden lg:block w-full h-full lg:max-h-[560px] 3xl:max-h-[760px] rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

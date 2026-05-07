import vertical_Marta from "../assets/Nos_Vert_M.webp";
import cuadrado_Marta from "../assets/Nos_Vert_M_1.webp";
import horizontal_Marta from "../assets/Nos_Hor_M.webp";

//import vertical_Ge from "../assets/Nos_Vert_G.webp";
//import cuadrado_Ge from "../assets/Nos_Vert_G_1.webp";
//import horizontal_Ge from "../assets/Nos_Hor_G.webp";

import divider from "../assets/divider.webp"

export default function Legado() {
    return (
        <section id="nosotros" className="bg-marfil scroll-mt-10 py-8 border-b border-deep-blue text-center">
            <h2 className="font-serif text-4xl mb-6 text-deep-blue">Nosotros</h2>
            
            <div className="flex flex-row w-full gap-8 items-start">
                <div className="md:w-1/2 shrink-0 hidden md:block lg:hidden">
                    <img 
                        src={vertical_Marta} 
                        alt="La maestra joyera trabajando con cinceles a su alrededor." 
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 md:mr-4">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 items-center">
                        <img 
                            src={cuadrado_Marta} 
                            alt="La maestra joyera trabajando con cinceles a su alrededor." 
                            className="md:hidden rounded-lg shadow-lg aspect-square object-cover w-full"
                        />
                        <p className="font-script text-xl md:text-2xl font-semibold text-deep-blue leading-relaxed">
                        Mi vida es un diálogo constante con los materiales nobles y el tiempo. Aquí el arte le da forma a un oficio que se perfecciona en el taller cada día.
                    </p>
                    </div>
                    <p className="text-grisProfundo text-center md:text-justify leading-relaxed">
                    Nieta de un joyero correntino. Me inicié en este hermoso oficio de grande junto con mis hijos en el taller de Pedro Ébeke.
                    Más adelante de la mano de Andrea Michaelsen y Lozzi descubrí la platería.
                    En el taller del Maestro Ricardo Rossi me desarrollé en la confección de mates y cuchillos criollos.
                    Con Agustín Martínez descubro la soguería. Esta consiste en la confección de cabos y vainas en cuero crudo sobado.
                    Hoy en día curso el 2do año en la Escuela de Orfebrería del Maestro Emilio Patarca. Simultáneamente perfecciono mi técnica con la Maestra de joyería Nuria Baum.
                    Aprendí escultura en arcilla con Alicia Cabezas y Encaje de Bolillos con María del Carmen Cabezas, acercándome aún más al mundo artístico.
                    </p>
                    <p className="font-script text-2xl font-semibold text-deep-blue text-right leading-relaxed">Marta Acevedo</p>
                    <img src={divider} alt="a line divider with a leaf." />
                </div>
                <div className="lg:w-1/2 shrink-0 hidden lg:block">
                    <img 
                        src={horizontal_Marta} 
                        alt="La maestra joyera trabajando con cinceles a su alrededor." 
                    />
                </div>
            </div>
            
            <div className="flex flex-row w-full gap-8 items-start">
                
                <div className="lg:w-1/2 shrink-0 hidden lg:block">
                    <img 
                        src=""
                        alt="" 
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 md:mr-4">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 items-center">
                        <p className="font-script text-xl md:text-2xl font-semibold text-deep-blue leading-relaxed">
                            Mi oficio consiste en construir el puente para que el trabajo de nuestras manos trascienda el taller. Comprendo la nobleza de la materia porque también aprendí a moldearla.
                        </p>
                        <img 
                            src=""
                            alt="" 
                            className="md:hidden rounded-lg shadow-lg aspect-square object-cover w-full"
                        />
                    </div>
                    <p className="text-grisProfundo text-center md:text-justify leading-relaxed">
                        Formado en el taller de moldeado de Alicia Cabezas, aprendí la paciencia que exige la arcilla antes de transformarse en una pieza terminada. Esa experiencia, sumada al aprendizaje de la joyería en el mismo banco de trabajo de Bajo la Parra, me permitió desarrollar una mirada que une lo tangible con lo virtual. Aunque hoy mi labor principal es el desarrollo web y la arquitectura digital, mi trabajo se nutre de esa vivencia directa con el oficio: entiendo el esfuerzo del artesano porque crecí en ese mismo espacio creativo.

                        Mi compromiso es asegurar que la esencia de nuestra herencia familiar encuentre su lugar en el mundo digital, cuidando que todos puedan ver la calidez de lo hecho por nuestras manos.
                    </p>
                    <p className="font-script text-2xl font-semibold text-deep-blue text-right leading-relaxed">Gerardo Cirou Acevedo</p>
                </div>
                <div className="md:w-1/2 shrink-0 hidden md:block lg:hidden">
                    <img 
                        src=""
                        alt="" 
                    />
                </div>
            </div>
        </section>
    );
}

import vertical_Marta from "../assets/Nos_Vert_M.jpg";
import cuadrado_Marta from "../assets/Nos_Vert_M_1.jpg";
import horizontal_Marta from "../assets/Nos_Hor_M.jpg";

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
                </div>
                <div className="lg:w-1/2 shrink-0 hidden lg:block">
                    <img 
                        src={horizontal_Marta} 
                        alt="La maestra joyera trabajando con cinceles a su alrededor." 
                    />
                </div>
            </div>
        </section>
    );
}

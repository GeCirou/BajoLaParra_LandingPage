import mail from "../assets/mail-logo.png";
import fb from "../assets/facebook-logo.png";
import ig from "../assets/instagram-logo.png";
import wsp from "../assets/whatsapp-logo.png";

export default function Contacto() {
    return (
        <section id="contacto" className="bg-marfil py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-deep-blue/80">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl text-zafiro mb-4 uppercase tracking-widest">
                        Envianos tu Consulta
                    </h2>
                    <p className="text-marronCuero font-sans italic">
                        Consultá por disponibilidad de cupos para piezas personalizadas o piezas de colección.
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-grisProfundo font-bold">
                            Nombre
                        </label>
                        <input 
                            type="text" 
                            className="border-b border-grisProfundo/30 py-2 focus:border-zafiro outline-none transition-colors bg-transparent"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-grisProfundo font-bold">
                            Email
                        </label>
                        <input 
                            type="email" 
                            className="border-b border-grisProfundo/30 py-2 focus:border-zafiro outline-none transition-colors bg-transparent"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-grisProfundo font-bold">
                            Interés
                        </label>
                        <select className="border-b border-grisProfundo/30 py-2 focus:border-zafiro outline-none bg-transparent appearance-none cursor-pointer">
                            <option>Línea Joyas / Orfebrería</option>
                            <option>Línea Platería Criolla</option>
                            <option>Línea Cerámica</option>
                            <option>Otros / Consultas Generales</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-grisProfundo font-bold">
                            Mensaje
                        </label>
                        <textarea 
                            rows="4" 
                            className="border border-grisProfundo/30 p-3 focus:border-zafiro outline-none transition-colors bg-transparent resize-none"
                            placeholder="Contanos qué pieza tenés en mente..."
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center mt-6">
                        <button 
                            type="submit"
                            className="bg-zafiro text-marfil px-12 py-4 font-serif text-lg rounded-xl hover:bg-celeste hover:text-deep-blue hover:border hover:border-zafiro transition-all duration-300 shadow-lg tracking-widest uppercase"
                        >
                            Enviar Consulta
                        </button>
                    </div>
                </form>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-deep-blue/80 mt-5">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl text-zafiro mb-4 uppercase tracking-widest">
                        Nuestras Redes
                    </h2>
                    <p className="text-marronCuero font-sans italic">
                        Seguinos para conocer nuestras últimas creaciones y ser parte de la comunidad Bajo la Parra.
                    </p>
                    <div className="flex flex-col">
                        <a 
                            href="mailto:bajolaparrajoyas@gmail.com" 
                            aria-label="Enviar email a bajolaparrajoyas@gmail.com"
                            className="flex flex-row gap-x-3 items-center justify-center mt-4 text-xs min-[400px]:text-base md:text-xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 px-2 md:px-4 w-full md:w-3/4 mx-auto"
                        >
                            <img 
                                src={mail} 
                                alt="Logo email"
                                className="h-4 md:h-8 shrink-0"
                            />
                            bajolaparrajoyas@gmail.com
                        </a>
                        <a
                            href="https://www.facebook.com/Joyasblp"
                            target="_blank"
                            aria-label="Visitar página de Facebook"
                            className="flex flex-row gap-x-3 items-center justify-center mt-4 text-xs min-[400px]:text-base md:text-xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 px-2 md:px-4 w-full md:w-3/4 mx-auto"
                        >
                            <img 
                                src={fb} 
                                alt="Logo Facebook"
                                className="h-4 md:h-8 shrink-0"
                            />
                            Bajo la Parra platería y soguería
                        </a>
                        <a
                            href="https://instagram.com/bajolaparrajoyas?igshid=MzNlNGNkZWQ4Mg=="
                            target="_blank"
                            aria-label="Visitar perfil de Instagram"
                            className="flex flex-row gap-x-3 items-center justify-center mt-4 text-xs min-[400px]:text-base md:text-xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 px-2 md:px-4 w-full md:w-3/4 mx-auto"
                        >
                            <img 
                                src={ig} 
                                alt="Logo Instagram"
                                className="h-4 md:h-8 shrink-0"
                            />
                            @bajolaparrajoyas
                        </a>
                        <a
                            href="https://wa.me/5491124921562?text=Hola%20Bajo%20la%20Parra!%0AMe%20interesa%20consultar%20por%20una%20pieza%20personalizada."
                            target="_blank"
                            aria-label="Enviar WhatsApp"
                            className="flex flex-row gap-x-3 items-center justify-center mt-4 text-xs min-[400px]:text-base md:text-xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 px-2 md:px-4 w-full md:w-3/4 mx-auto"
                        >
                            <img 
                                src={wsp} 
                                alt="Logo WhatsApp"
                                className="h-4 md:h-8 shrink-0"
                            />
                            +54 9 11 2492 1562
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

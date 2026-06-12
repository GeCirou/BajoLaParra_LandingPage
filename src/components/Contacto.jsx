import React, { useState } from "react";
import mail from "../assets/mail-logo.webp";
import fb from "../assets/facebook-logo.webp";
import ig from "../assets/instagram-logo.webp";
import wsp from "../assets/whatsapp-logo.webp";
import {WSP_NUMBER} from "../data/config.js";

export default function Contacto() {
    // 1. Estado para manejar el formulario
    const [formData, setFormData] = useState({
        nombre: '',
        interes: 'Línea Joyas / Orfebrería',
        mensaje: ''
    });

    // 2. Manejador de cambios en los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. Manejador del envío a WhatsApp
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nroTelefono = WSP_NUMBER;
        
        // Formateo del mensaje con negritas para que te llegue prolijo
        const mensajeWsp = `¡Hola! Soy *${formData.nombre}*.
Te escribo desde la web porque me interesa la *${formData.interes}*.

*Mi consulta:*
${formData.mensaje}`;

        const url = `https://wa.me/${nroTelefono}?text=${encodeURIComponent(mensajeWsp)}`;
        
        window.open(url, '_blank');
    };

    return (
        <section id="contacto" className="bg-marfil py-20 3xl:py-28 px-6 3xl:px-12 scroll-mt-10">
            <div className="max-w-4xl 3xl:max-w-6xl mx-auto bg-white p-8 md:p-12 3xl:p-16 shadow-sm border border-deep-blue/80">
                <div className="text-center mb-10 3xl:mb-14">
                    <h2 className="font-serif text-3xl 3xl:text-5xl text-zafiro mb-4 3xl:mb-6 uppercase tracking-widest">
                        Envianos tu Consulta
                    </h2>
                    <p className="text-marronCuero font-sans italic 3xl:text-xl">
                        Consultá por disponibilidad de cupos para piezas personalizadas o piezas de colección.
                    </p>
                </div>

                {/* Formulario con onSubmit */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-8">
                    {/* Nombre - Ahora ocupa las dos columnas para balancear el diseño */}
                    <div className="md:col-span-2 flex flex-col gap-2 3xl:gap-3">
                        <label className="text-xs 3xl:text-sm uppercase tracking-wider text-grisProfundo font-bold">
                            Nombre
                        </label>
                        <input 
                            type="text" 
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="border-b border-grisProfundo/30 py-2 3xl:py-3 3xl:text-lg focus:border-zafiro outline-none transition-colors bg-transparent"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    {/* Interés */}
                    <div className="md:col-span-2 flex flex-col gap-2 3xl:gap-3">
                        <label className="text-xs 3xl:text-sm uppercase tracking-wider text-grisProfundo font-bold">
                            Interés
                        </label>
                        <select 
                            name="interes"
                            value={formData.interes}
                            onChange={handleChange}
                            className="border-b border-grisProfundo/30 py-2 3xl:py-3 3xl:text-lg focus:border-zafiro outline-none bg-transparent appearance-none cursor-pointer"
                        >
                            <option value="">¿Qué buscás?</option>
                            <option value="Línea Joyas / Orfebrería">Joyas / Orfebrería</option>
                            <option value="Platería Criolla">Platería Criolla</option>
                            <option value="Cerámica">Cerámica</option>
                            <option value="Servicios / Reparaciones">Servicios / Reparaciones</option>
                            <option value="Otros / Consultas Generales">Otros / Consultas Generales</option>
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div className="md:col-span-2 flex flex-col gap-2 3xl:gap-3">
                        <label className="text-xs 3xl:text-sm uppercase tracking-wider text-grisProfundo font-bold">
                            Mensaje
                        </label>
                        <textarea 
                            name="mensaje"
                            rows="4" 
                            required
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="border border-grisProfundo/30 p-3 3xl:p-4 3xl:text-lg focus:border-zafiro outline-none transition-colors bg-transparent resize-none"
                            placeholder="Contanos qué pieza tenés en mente..."
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center mt-6 3xl:mt-8">
                        <button 
                            type="submit"
                            className="bg-zafiro text-marfil px-12 3xl:px-16 py-4 3xl:py-6 font-serif text-lg 3xl:text-2xl rounded-xl hover:bg-celeste hover:text-deep-blue hover:border hover:border-zafiro transition-all duration-300 shadow-lg tracking-widest uppercase"
                        >
                            Enviar Consulta por WhatsApp
                        </button>
                    </div>
                </form>
            </div>

            {/* Sección de Redes Sociales */}
            <div className="max-w-4xl 3xl:max-w-6xl mx-auto bg-white p-8 md:p-12 3xl:p-16 shadow-sm border border-deep-blue/80 mt-5 3xl:mt-8">
                <div className="text-center mb-10 3xl:mb-14">
                    <h2 className="font-serif text-3xl 3xl:text-5xl text-zafiro mb-4 3xl:mb-6 uppercase tracking-widest">
                        Nuestras Redes
                    </h2>
                    <p className="text-marronCuero font-sans italic 3xl:text-xl">
                        Seguinos para conocer nuestras últimas creaciones y ser parte de la comunidad Bajo la Parra.
                    </p>
                    <div className="flex flex-col">
                        <a 
                            href="mailto:bajolaparrajoyas@gmail.com" 
                            aria-label="Enviar email a bajolaparrajoyas@gmail.com"
                            className="flex flex-row gap-x-3 3xl:gap-x-5 items-center justify-center mt-4 3xl:mt-6 text-xs min-[400px]:text-base md:text-xl 3xl:text-2xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 3xl:py-4 px-2 md:px-4 3xl:px-6 w-full md:w-3/4 mx-auto"
                        >
                            <img src={mail} alt="Logo email" className="h-4 md:h-8 3xl:h-10 shrink-0" />
                            bajolaparrajoyas@gmail.com
                        </a>
                        <a
                            href="https://www.facebook.com/Joyasblp"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar página de Facebook"
                            className="flex flex-row gap-x-3 3xl:gap-x-5 items-center justify-center mt-4 3xl:mt-6 text-xs min-[400px]:text-base md:text-xl 3xl:text-2xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 3xl:py-4 px-2 md:px-4 3xl:px-6 w-full md:w-3/4 mx-auto"
                        >
                            <img src={fb} alt="Logo Facebook" className="h-4 md:h-8 3xl:h-10 shrink-0" />
                            Bajo la Parra platería y soguería
                        </a>
                        <a
                            href="https://instagram.com/bajolaparrajoyas"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar perfil de Instagram"
                            className="flex flex-row gap-x-3 3xl:gap-x-5 items-center justify-center mt-4 3xl:mt-6 text-xs min-[400px]:text-base md:text-xl 3xl:text-2xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 3xl:py-4 px-2 md:px-4 3xl:px-6 w-full md:w-3/4 mx-auto"
                        >
                            <img src={ig} alt="Logo Instagram" className="h-4 md:h-8 3xl:h-10 shrink-0" />
                            @bajolaparrajoyas
                        </a>
                        <a
                            href={`https://wa.me/${WSP_NUMBER}?text=Hola%20Bajo%20la%20Parra!%0AMe%20interesa%20consultar%20por%20una%20pieza%20personalizada.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Enviar WhatsApp"
                            className="flex flex-row gap-x-3 3xl:gap-x-5 items-center justify-center mt-4 3xl:mt-6 text-xs min-[400px]:text-base md:text-xl 3xl:text-2xl text-deep-blue font-semibold hover:bg-celeste hover:text-black transition-colors border-2 border-zafiro rounded-xl py-2 3xl:py-4 px-2 md:px-4 3xl:px-6 w-full md:w-3/4 mx-auto"
                        >
                            <img src={wsp} alt="Logo WhatsApp" className="h-4 md:h-8 3xl:h-10 shrink-0" />
                            {WSP_NUMBER}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

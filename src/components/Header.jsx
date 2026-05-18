import { useState } from "react";

export default function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const navItems = ['nosotros', 'colecciones', 'tienda', 'servicios', 'contacto'];

    return (
        <>
            <header className="bg-zafiro text-marfil py-3 px-4 shadow-md border-b border-marfil sticky top-0 z-40">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex flex-row gap-3 items-center">
                        <img src="/LogoAzulIco.ico" alt="Logo" className="h-9 w-10"/>
                        <span className="font-serif text-xl tracking-widest uppercase">
                            Bajo la Parra
                        </span>
                    </div>

                    {/* Nav desktop */}
                    <ul className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-wider">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} className="hover:text-celeste transition-colors duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                        onClick={() => setMenuAbierto(true)}
                        aria-label="Abrir menú"
                    >
                        <span className="block w-6 h-0.5 bg-marfil"></span>
                        <span className="block w-6 h-0.5 bg-marfil"></span>
                        <span className="block w-6 h-0.5 bg-marfil"></span>
                    </button>
                </nav>
            </header>

            {/* Overlay oscuro */}
            {menuAbierto && (
                <div
                    className="fixed inset-0 z-40 bg-black/50"
                    onClick={() => setMenuAbierto(false)}
                />
            )}

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-zafiro z-50 shadow-2xl transform transition-transform duration-300 ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMenuAbierto(false)}
                        aria-label="Cerrar menú"
                        className="text-marfil text-2xl font-bold p-2 cursor-pointer hover:text-celeste transition-colors"
                    >
                        ✕
                    </button>
                </div>
                <ul className="flex flex-col gap-2 px-6 font-sans text-sm uppercase tracking-wider">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={() => setMenuAbierto(false)}
                                className="block py-3 text-marfil border-b border-marfil/20 hover:text-celeste transition-colors duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
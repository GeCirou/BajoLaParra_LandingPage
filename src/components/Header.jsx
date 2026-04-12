export default function Header() {
    return (
        <header className="bg-zafiro text-marfil py-3 px-4 shadow-md border-b border-marfil sticky top-0 z-40">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex flex-row gap-3 items-center">
                    {/* Quitamos /public de la ruta */}
                    <img src="/LogoAzulIco.ico" alt="Logo" className="h-9 w-10"/>
                    <span className="font-serif text-xl tracking-widest uppercase">
                        Bajo la Parra
                    </span>
                </div>
                <ul className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-wider">
                    {['nosotros', 'colecciones', 'tienda', 'contacto'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} className="hover:text-celeste transition-colors duration-300">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

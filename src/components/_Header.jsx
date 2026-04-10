export default function Header() {
    return (
        <header className="bg-zafiro text-marfil py-6 px-4 shadow-md border-b border-marfil">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
                <img src="/public/LogoAzulIco.ico" alt="Logo de Bajo la Parra" className="h-9 w-10"/>
                <span className="font-serif text-xl tracking-widest uppercase">
                    Bajo la Parra
                </span>
            </div>
            <ul className="mr-5 flex gap-8 font-sans text-sm uppercase tracking-wider">
                <li className="cursor-pointer">
                    {/*Legado.jsx*/}
                    <a href="#nosotros" className="hover:text-celeste hover:text-base transition-colors transition-all duration-300">
                        NOSOTROS
                    </a>
                </li>
                <li className="cursor-pointer">
                    {/*ProductGrid.jsx*/}
                    <a href="#colecciones" className="hover:text-celeste hover:text-base transition-colors transition-all duration-300">
                        COLECCIONES
                    </a>
                </li>
                <li className="cursor-pointer">
                    {/*Ventas.jsx*/}
                    <a href="#tienda" className="hover:text-celeste hover:text-base transition-colors transition-all duration-300">
                        TIENDA
                    </a>
                </li>
                <li className="cursor-pointer">
                    {/*Contacto.jsx*/}
                    <a href="#contacto" className="hover:text-celeste hover:text-base transition-colors transition-all duration-300">
                        CONTACTO
                    </a>
                </li>
            </ul>
            </nav>
        </header>
    );
}
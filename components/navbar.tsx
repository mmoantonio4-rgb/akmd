// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Reflexiones', path: '/reflexiones' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-black border-b border-zinc-800">
      <div className="text-white font-bold text-xl tracking-tighter">PINT-XI-LIKS</div>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
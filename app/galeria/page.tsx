// app/galeria/page.tsx
import CloudImage from '../../components/CloudImage';

export default function GaleriaPage() {
  // Lista de tus fotos en Cloudinary (Sustituye por tus IDs reales)
  const fotos = [
    { id: "foto1", desc: "Descripción de la obra 1" },
    { id: "foto2", desc: "Descripción de la obra 2" },
    { id: "foto3", desc: "Descripción de la obra 3" },
    { id: "foto4", desc: "Descripción de la obra 4" },
    { id: "foto5", desc: "Descripción de la obra 5" },
    { id: "foto6", desc: "Descripción de la obra 6" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            GALERÍA DE ARTE
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explora la colección de PINT-XI-LIKS
          </p>
        </header>

        {/* GRID DE 6 FOTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fotos.map((foto, index) => (
            <div key={index} className="group overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-md">
              <CloudImage 
                publicId={foto.id} 
                alt={foto.desc} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {foto.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
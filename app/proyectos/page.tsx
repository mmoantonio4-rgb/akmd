// app/proyectos/page.tsx
import CloudImage from '../../components/CloudImage';

export default function ProyectosPage() {
  // Puedes añadir tantos proyectos como quieras en esta lista
  const proyectos = [
    {
      id: "id-de-tu-imagen-1",
      titulo: "Título del Proyecto 1",
      descripcion: "Aquí va la descripción detallada del proyecto 1. Puedes hablar sobre la técnica utilizada o la intención detrás de la obra."
    },
    {
      id: "id-de-tu-imagen-2",
      titulo: "Título del Proyecto 2",
      descripcion: "Descripción breve y concisa para el segundo proyecto para mantener el equilibrio visual."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-zinc-50">
          NUESTROS PROYECTOS
        </h1>

        <div className="flex flex-col gap-16">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Imagen arriba */}
              <div className="w-full max-w-2xl mb-6">
                <CloudImage 
                  publicId={proyecto.id} 
                  alt={proyecto.titulo} 
                  className="w-full rounded-xl shadow-lg" 
                />
              </div>
              
              {/* Texto debajo */}
              <div className="text-center max-w-xl">
                <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">
                  {proyecto.titulo}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
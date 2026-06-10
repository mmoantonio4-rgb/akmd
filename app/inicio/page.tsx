import CloudImage from '../components/CloudImage';

export default function LogoPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      
      {/* 1. EL LOGO */}
      <div className="w-32 h-32 mb-8">
        <CloudImage 
          publicId="2-2200-200_mvi3au" // Sustituye por el ID de tu logo en Cloudinary
          alt="Logo PINT-XI-LIKS" 
          className="w-full h-full object-contain shadow-none" 
        />
      </div>

      {/* 2. LA CAJA DE TEXTO */}
      <div className="max-w-xl w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">
          HIJOS DE LA PURA FALACIA
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-center">
          Este es el espacio donde la narrativa y el arte visual se encuentran. 
          Aquí puedes escribir el manifiesto de tu proyecto o una breve 
          introducción que defina la esencia de PINT-XI-LIKS.
        </p>
      </div>

    </div>
  );
}
// app/page.tsx
import CloudImage from '../components/CloudImage';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-center text-4xl font-bold mb-12 text-black dark:text-zinc-50">
          PINT-XI-LIKS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Lateral Izquierda */}
          <div className="hidden md:block">
            <CloudImage publicId="Large6" alt="arte lateral" />
          </div>

          {/* Central Grande */}
          <div>
            <CloudImage publicId="ff4" alt="arte principal" className="w-full scale-110" />
          </div>

          {/* Lateral Derecha */}
          <div className="hidden md:block">
            <CloudImage publicId="gwfsd" alt="arte lateral" />
          </div>
        </div>

      </div>
    </div>
  );
}

// components/CloudImage.tsx

interface CloudImageProps {
  publicId: string;
  alt: string;
  className?: string; // El signo de interrogación "?" significa que es opcional
}

export default function CloudImage({ publicId, alt, className = "" }: CloudImageProps) {
  const baseUrl = "https://res.cloudinary.com/dvwlxkbhb/image/upload/";
  
  return (
    <img 
      src={`${baseUrl}${publicId}`} 
      alt={alt} 
      // Aquí usamos la variable className que ahora sí reconoce
      className={`rounded-lg shadow-lg ${className}`}
    />
  );
}
// components/CloudImage.tsx
interface CloudImageProps {
  publicId: string; // El nombre del archivo en Cloudinary
  alt: string;
}

export default function CloudImage({ publicId, alt }: CloudImageProps) {
  // Asegúrate de cambiar "dvwlxkbhb" por el tuyo real
  const baseUrl = "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/";
  
  return (
    <img 
      src={`${baseUrl}${publicId}`} // Aquí debe ir publicId, no dvwlxkbhb
      alt={alt} 
      className="rounded-lg shadow-lg"
    />
  );
}
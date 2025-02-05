interface MenuItemProps {
  name: string;
  description: string;
  price: number | string;
  image: string;
  soldOut?: boolean;
  className?: string;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
  soldOut,
  className,
}: MenuItemProps) {
  return (
    <div className={`flex gap-4 items-center p-4 rounded-lg hover:bg-white/50 transition-all duration-300 ${className || ''}`}>
      <img
        src={image} // Ajustado para pasta correta
        alt={name}
        className={`w-24 h-24 object-cover rounded-lg shadow-md 
          ${
            soldOut
              ? "grayscale opacity-70"
              : "hover:scale-105 transition-transform"
          }`}
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 italic text-sm">{description}</p>
        <p
          className={`mt-2 font-bold ${
            soldOut ? "text-gray-400" : "text-[#f8c245]"
          }`}
        >
          {soldOut ? "SOLD OUT" : `$${price}`}
        </p>
      </div>
    </div>
  );
}

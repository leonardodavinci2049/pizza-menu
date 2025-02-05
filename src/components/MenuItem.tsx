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
    <div className={`flex items-start space-x-6 p-6 group ${className || ""}`}>
      <img
        src={image}
        alt={name}
        className={`w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-xl transition-all duration-300
          ${
            soldOut
              ? "grayscale opacity-70"
              : "group-hover:scale-105 group-hover:shadow-xl"
          }`}
      />
      <div className="flex-1">
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 group-hover:text-[#f8c245] transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 italic text-base lg:text-lg mt-2">
          {description}
        </p>
        <p
          className={`mt-4 text-xl lg:text-2xl font-bold ${
            soldOut ? "text-gray-400 uppercase" : "text-[#f8c245]"
          }`}
        >
          {soldOut ? "Sold out" : `$${price}`}
        </p>
      </div>
    </div>
  );
}

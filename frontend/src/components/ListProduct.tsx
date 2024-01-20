type ListProductProps = {
  product: Product;
  onClick: () => void;
  onDelete: () => void;
};

export default function ListProduct({ product, onClick, onDelete }: Readonly<ListProductProps>) {
  const imageUrls = product.image_urls ? JSON.parse(product.image_urls) : [];
  const thumbnailUrl = imageUrls.length > 0 ? imageUrls[0] : "/default_thumbnail.webp";

  return (
    <li onClick={onClick} className="my-1 flex rounded-lg bg-gray-800 p-4 hover:bg-blue-600">
      <img
        src={thumbnailUrl}
        alt={product.title}
        className="mr-4 h-16 w-16 flex-none rounded object-cover"
      />
      <div className="flex flex-grow justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h2>
          <p className="text-gray-900 dark:text-white">{product.category}</p>
          <p className="text-gray-900 dark:text-white">{product.price}€</p>
        </div>
        <i
          className="fa-solid fa-trash cursor-pointer hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </div>
    </li>
  );
}

import { Product } from "../models/productModel";

type ListItemProps = {
  product: Product;
  onClick: () => void;
  onDelete: () => void;
};

export default function ListItem({ product, onClick, onDelete }: Readonly<ListItemProps>) {
  return (
    <li onClick={onClick} className="my-1 rounded-lg bg-gray-800 p-4 hover:bg-blue-600">
      <div className="flex justify-between">
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

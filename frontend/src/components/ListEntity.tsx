type ListEntityProps<T> = {
  entity: T;
  onClick: () => void;
  onDelete: () => void;
  getThumbnailUrl: (entity: T) => string;
  getTitle: (entity: T) => string;
  getSubtitle1?: (entity: T) => string;
  getSubtitle2?: (entity: T) => string;
};

export default function ListEntity<T>({
  entity,
  onClick,
  onDelete,
  getThumbnailUrl,
  getTitle,
  getSubtitle1,
  getSubtitle2,
}: Readonly<ListEntityProps<T>>) {
  return (
    <li
      onClick={onClick}
      className="my-2 flex rounded-lg bg-gray-100 p-4 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-blue-600"
    >
      <img
        src={getThumbnailUrl(entity) ?? "/default_thumbnail.webp"}
        alt={getTitle(entity)}
        className="mr-4 h-16 w-16 flex-none rounded object-cover"
      />
      <div className="flex flex-grow justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{getTitle(entity)}</h2>
          {getSubtitle1 && <p className="text-gray-900 dark:text-white">{getSubtitle1(entity)}</p>}
          {getSubtitle2 && <p className="text-gray-900 dark:text-white">{getSubtitle2(entity)}</p>}
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

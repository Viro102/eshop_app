type ListUserProps = {
  user: User;
  onClick: () => void;
  onDelete: () => void;
};

export default function ListProduct({ user, onClick, onDelete }: Readonly<ListUserProps>) {
  return (
    <li onClick={onClick} className="my-1 flex rounded-lg bg-gray-800 p-4 hover:bg-blue-600">
      <div className="flex flex-grow justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{user.username}</h2>
          <p className="text-gray-900 dark:text-white">{user.email}</p>
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

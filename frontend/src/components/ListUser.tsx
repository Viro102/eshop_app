type ListUserProps = {
  user: User;
  onClick: () => void;
  onDelete: () => void;
};

export default function ListProduct({ user, onClick, onDelete }: Readonly<ListUserProps>) {
  return (
    <li onClick={onClick} className="my-1 flex rounded-lg bg-gray-800 p-4 hover:bg-blue-600">
      <img
        src={user.profile_picture_url}
        alt={user.username}
        className="mr-4 h-16 w-16 flex-none rounded object-cover"
      />
      <div className="flex flex-grow justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{user.username}</h2>
          <p className="text-gray-900 dark:text-white">{user.email}</p>
          <p className="text-gray-900 dark:text-white">{user.role}</p>
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

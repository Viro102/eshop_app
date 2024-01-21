import { useState, useEffect } from "react";
import { fetchAllUsersData, signUpUser, patchUser, deleteUser } from "../api/userService";
import Button from "./Button";
import InputForm from "./InputForm";
import ListEntity from "./ListEntity";

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    password: "",
    username: "",
    role: "user",
  });

  useEffect(() => {
    fetchAllUsersData().then(setUsers);
  }, []);

  const refreshForm = () => {
    setUser({
      id: 0,
      email: "",
      password: "",
      username: "",
      role: "user",
    });
    fetchAllUsersData().then(setUsers);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleCreateUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await signUpUser({ email: user.email, password: user.password });
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleUpdateUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await patchUser(user.id, {
        email: user.email,
        username: user.username,
      });
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      await fetchAllUsersData();
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="mx-auto my-5 flex w-4/5 flex-col items-center justify-center self-center">
      <ul>
        {users?.map((user) => (
          <ListEntity
            key={user.id}
            entity={user}
            onClick={() => setUser(user)}
            onDelete={() => handleDeleteUser(user.id)}
            getThumbnailUrl={(user) => user.profile_picture_url ?? "/default_thumbnail.webp"}
            getTitle={(user) => user.username}
            getSubtitle1={(user) => user.email}
            getSubtitle2={(user) => user.role}
          />
        ))}
      </ul>
      <form>
        <InputForm
          name="username"
          label="Username"
          htmlFor="username"
          type="text"
          placeholder="Enter username"
          onChange={handleInputChange}
          value={user.username}
        />
        <InputForm
          name="email"
          label="Email"
          htmlFor="email"
          type="text"
          placeholder="Enter email"
          onChange={handleInputChange}
          value={user.email}
        />
        <div className="my-3 flex justify-center gap-3">
          <Button onClick={handleCreateUser}>Add user</Button>
          <Button onClick={handleUpdateUser}>Update user</Button>
        </div>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import { fetchAllUsersData, signUpUser, patchUser, deleteUser } from "../api/userService";
import Button from "./Button";
import InputForm from "./InputForm";
import ListUser from "./ListUser";

export default function UserManagement() {
  // TODO: Update user fix
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
    role: "user",
  });

  useEffect(() => {
    fetchAllUsersData().then((data) => setUsers(data));
  }, []);

  const refreshForm = () => {
    setUser({
      email: "",
      password: "",
      username: "",
      role: "user",
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleCreateUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await signUpUser({ email: user.email, password: user.password });
      await fetchAllUsersData();
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleUpdateUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await patchUser(user.id!, user);
      await fetchAllUsersData();
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
      <Button className="my-2" onClick={handleCreateUser}>
        Add user
      </Button>
      <ul>
        {users.map((user) => (
          <ListUser
            key={user.id}
            user={user}
            onClick={() => setUser(user)}
            onDelete={() => handleDeleteUser(user.id!)}
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

        <Button onClick={handleUpdateUser}>Update user</Button>
      </form>
    </div>
  );
}

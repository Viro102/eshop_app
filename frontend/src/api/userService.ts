import { fetchData } from "./util";

async function signUpUser(inputs: { email: string; password: string }): Promise<void> {
  await fetchData(`users/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...inputs }),
  });
}

async function loginUser(inputs: { email: string; password: string }): Promise<User> {
  const responseJson: CustomResponse = await fetchData(`users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ ...inputs }),
  });
  return responseJson.data as User;
}

async function checkAuth(options = {}): Promise<CustomResponse> {
  return fetchData(`users/auth`, options);
}

async function fetchUserDataId(userId: number, options = {}): Promise<User> {
  const responseJson = await fetchData(`users/${userId}`, options);
  return responseJson.data as User;
}

async function fetchAllUsersData(options = {}): Promise<User[]> {
  const responseJson = await fetchData(`users`, options);
  return responseJson.data as User[];
}

async function patchUser(userId: number, user: User): Promise<void> {
  await fetchData(`users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}
async function deleteUser(userId: number): Promise<void> {
  await fetchData(`users/${userId}`, { method: "DELETE" });
}

export {
  signUpUser,
  loginUser,
  checkAuth,
  fetchUserDataId,
  fetchAllUsersData,
  patchUser,
  deleteUser,
};

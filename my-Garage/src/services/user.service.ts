import type { User } from "../models/user";

const USER_URL = "/data/user.json";

export async function getUser(): Promise<User> {
  const response = await fetch(USER_URL);

  if (!response.ok) {
    throw new Error(`No se pudo cargar user.json (status ${response.status})`);
  }

  const data: User = await response.json();
  console.log("user cargado", data);

  return data;
}
// src/user.ts
type User = {
  id: number;
  name: string;
  email: string;
};

let users: User[] = [];

export function addUser(name: string, email: string): User {
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  return newUser;
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

export function removeUser(id: number): boolean {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
}

// Reset the users array (for testing purposes)
export function resetUsers() {
  users = [];
}

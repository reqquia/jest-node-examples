import { addUser, getUserById, removeUser, resetUsers } from "../src/user";

beforeEach(() => {
  resetUsers();
});

test("should add a new user", () => {
  const user = addUser("John Doe", "john.doe@example.com");
  expect(user).toEqual({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  });
});

test("should get a user by ID", () => {
  const user1 = addUser("John Doe", "john.doe@example.com");
  const user2 = addUser("Jane Doe", "jane.doe@example.com");

  expect(getUserById(1)).toEqual(user1);
  expect(getUserById(2)).toEqual(user2);
  expect(getUserById(3)).toBeUndefined();
});

test("should remove a user by ID", () => {
  addUser("John Doe", "john.doe@example.com");
  addUser("Jane Doe", "jane.doe@example.com");

  expect(removeUser(1)).toBe(true);
  expect(getUserById(1)).toBeUndefined();
  expect(getUserById(2)).not.toBeUndefined();

  expect(removeUser(3)).toBe(false);
});

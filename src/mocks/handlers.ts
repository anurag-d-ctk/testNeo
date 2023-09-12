// src/mocks/handlers.js
import { rest } from "msw";
import { faker } from "@faker-js/faker";

const generateUser = () => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 80 }),
});

const generateUsers = (length: number = 10) => {
  const users = [];
  for (let i = 0; i < length; i++) {
    users.push(generateUser());
  }
  return users;
};

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    const users = generateUsers(5);
    return res(ctx.json(users));
  }),
];

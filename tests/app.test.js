const apiUrl = "http://127.0.0.1:3000/docs";
const spawn = require("child_process").spawn;

jest.setTimeout(10000);

beforeAll(async () => {
  const server = spawn("npm", ["run", "start:dev"], { detached: true });
  await new Promise((resolve) => setTimeout(resolve, 5000));
  global.server = server;
});

afterAll(async () => {
  process.kill(-global.server.pid);
});

test("API should be running and return status 200", async () => {
  const response = await fetch(apiUrl);
  expect(response.status).toBe(200);
});

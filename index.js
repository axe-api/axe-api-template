import path from "path";
import { Server } from "axe-api";

const appFolder = path.join(path.resolve(), "app");
const server = new Server(appFolder);
server.listen();

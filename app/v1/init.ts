import { Express, Request, Response } from "express";
import ErrorHandler from "./Handlers/ErrorHandler";

const onBeforeInit = async (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.json({
      name: "AXE API",
      description: "The next generation Rest API framework.",
      documentation: "https://axe-api.com/getting-started/crud/index.html",
    });
  });
};

const onAfterInit = async (app: Express) => {
  // Set global error handler.
  app.use(ErrorHandler);
};

export { onBeforeInit, onAfterInit };

import { Express } from "express";

const onBeforeInit = async (app: Express) => {
  app.get("/", (req, res) => {
    res.json({
      name: "AXE API",
      description: "The next generation Rest API framework.",
      documentation:
        "https://axe-api.github.io/getting-started/crud/index.html",
    });
  });
};

const onAfterInit = async (app: Express) => {};

export { onBeforeInit, onAfterInit };

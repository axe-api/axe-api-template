const health = (req, res) => {
  return res.json({});
};

export default async ({ app }) => {
  app.get("/api/health", health);
};

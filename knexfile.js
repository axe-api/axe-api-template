import dotenv from "dotenv";
dotenv.config();

module.exports = async () => {
  const { default: configurations } = await import("./app/Config/Database.js");
  return configurations;
};

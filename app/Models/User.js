import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return {};
  }

  get validations() {
    return {};
  }

  get middlewares() {
    return [];
  }
}

export default User;

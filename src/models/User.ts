import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  id!: number;
  name!: string;
  email!: string | null;
  username!: string;
  password!: string;
  role!: "superadmin" | "admin" | "user";
  created_at!: string | null;
  updated_at!: string | null;
  deleted_at!: string | null;

  static get tableName() {
    return "users";
  }
}

export type User = ModelObject<UserModel>;

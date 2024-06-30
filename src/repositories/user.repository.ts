import { User, UserModel } from "../models/User";

type CreateUser = {
  name: string;
  username: string;
  password: string;
  role: "superadmin" | "admin" | "user";
};

type UpdateUser = {
  name?: string;
  username?: string;
  password?: string;
  role?: "superadmin" | "admin" | "user";
};

export default class UserRepository {
  async getUsers(): Promise<User[]> {
    const users = await UserModel.query();
    return users;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await UserModel.query().findOne({ username });
    return user;
  }

  async createUser(params: CreateUser): Promise<User> {
    const { name, username, password, role } = params;

    const user = await UserModel.query()
      .insert({
        name,
        username,
        password,
        role,
      })
      .returning("*");

    return user;
  }

  async deleteUserById(id: number): Promise<boolean> {
    try {
      await UserModel.query()
        .findById(id)
        .patch({ deleted_at: new Date().toISOString() });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUserById(id: number) {
    const user = await UserModel.query().findById(id);
    return user;
  }

  async updateUserById(id: number, params: UpdateUser): Promise<User> {
    const user = await UserModel.query()
      .findById(id)
      .patch({ ...params, updated_at: new Date().toISOString() })
      .returning("*")
    return user[0];
  }
}

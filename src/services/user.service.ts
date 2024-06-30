import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";

type CreateUser = {
  name: string;
  email?: string;
  username: string;
  password: string;
  role?: "superadmin" | "admin" | "user";
};

type UpdateUser = {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: "superadmin" | "admin" | "user";
};

export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getUsers = async () => {
    const users = await this.userRepository.getUsers();
    return users;
  };

  createUser = async (params: CreateUser) => {
    const { name, username, password, role = "user" } = params;
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await this.userRepository.createUser({
      name,
      username,
      password: hashedPwd,
      role,
    });
    return user;
  };

  deleteUserById = async (id: number) => {
    const isDeleted = await this.userRepository.deleteUserById(id);
    return isDeleted;
  };

  getUserById = async (id: number) => {
    const user = await this.userRepository.getUserById(id);
    return user;
  };

  updateUserById = async (id: number, data: UpdateUser) => {
    const user = await this.userRepository.updateUserById(id, data);
    return user;
  };
}

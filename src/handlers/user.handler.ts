import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserHandler {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getAllUsers = async (_: Request, res: Response) => {
    const users = await this.userService.getUsers();
    res.status(200).json({ message: "success", users });
  };

  postUser = async (req: Request, res: Response) => {
    const { name, email, username, password, role } = req.body;

    console.log(req.body);

    const user = await this.userService.createUser({
      name,
      email,
      username,
      password,
      role,
    });

    res.status(201).json({
      message: "User created",
      user,
    });
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getUserById(+id);
    res.status(200).json({ message: "success", user });
  };

  updateUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, username, password, role } = req.body;

    const user = await this.userService.updateUserById(+id, {
      name,
      email,
      username,
      password,
      role,
    });

    res.status(200).json({
      message: "User updated",
      user,
    });
  };

  deleteUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const isDeleted = await this.userService.deleteUserById(+id);

    res.status(200).json({
      message: "User deleted",
      isDeleted,
    });
  };
}

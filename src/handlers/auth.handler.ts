import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import ClientError from "../common/client-error";

export default class AuthHandler {
  private authService: AuthService;
  private userService: UserService;

  constructor() {
    // seharusnya pake dependency injection tapi malas
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  postLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const token = await this.authService.login(username, password);
      res.status(200).json({ message: "success", token });
    } catch (err) {
      if (err instanceof ClientError)
        res.status(err.statusCode).json({ message: err.message });
    }
  };

  postLogout = async (req: Request, res: Response) => {
    // not implemented
    res.status(200).json({ message: "success" });
  };

  postMe = async (req: Request, res: Response) => {
    // @ts-expect-error but it won't error because middleware already check the user
    const { id } = req.user;

    const user = await this.authService.me(id);

    res.status(200).json({ message: "success", user });
  };

  postRegister = async (req: Request, res: Response) => {
    const { name, username, password } = req.body;

    const user = await this.userService.createUser({
      name,
      username,
      password,
    });

    res.status(201).json({ message: "success", user });
  };
}

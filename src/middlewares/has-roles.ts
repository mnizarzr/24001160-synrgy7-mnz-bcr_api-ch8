import { NextFunction, Request, Response } from "express";

export default function hasRoles(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const hasRole = roles.some((role) => req?.user?.role == role);

    if (!hasRole) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
}

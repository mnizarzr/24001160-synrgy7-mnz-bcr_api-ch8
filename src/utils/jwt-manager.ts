import jwt, { SignOptions } from "jsonwebtoken";

const jwtSignOptions: SignOptions = {
  issuer: "bcr-web-server",
  audience: "bcr-user",
};

export const signToken = (payload: string | object | Buffer, sub: string) =>
  jwt.sign(payload, "123456789", {
    ...jwtSignOptions,
    subject: sub,
    algorithm: "HS256",
    expiresIn: "7d", // the `exp` claim
  });

export const decodeToken = (token: string) =>
  jwt.decode(token, { complete: true });

// export const verifyToken = (token: string) =>
//     jwt.verify(token, refreshTokenSecret, {
//         audience: aud,
//         issuer: iss,
//         // maxAge: '24h', // verify the timespan between `iat` claim
//         complete: true,
//     })

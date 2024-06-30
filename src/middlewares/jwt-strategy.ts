import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
  VerifiedCallback,
  VerifyCallback,
} from "passport-jwt";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "123456789",
  issuer: "bcr-web-server",
  audience: "bcr-user",
  jsonWebTokenOptions: {
    maxAge: "7d",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verify: VerifyCallback = (payload: any, done: VerifiedCallback) => {
  if (payload.sub === null || payload.sub === undefined) {
    return done(new Error("Token doesn't contain valid payload"), false);
  }
  return done(null, payload);
};

const jwtStrategy = () => new JwtStrategy(opts, verify);

export default jwtStrategy;

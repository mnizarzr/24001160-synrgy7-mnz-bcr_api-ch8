export { };

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      HOST?: string;
    }
  }

}

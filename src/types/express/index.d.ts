export { }

declare global {
    namespace Express {
        interface User {
            id: number;
            username: string;
            role: string;
        }
        export interface Request {
            user?: User;
        }
    }
}

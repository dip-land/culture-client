export default class baseHandler {
    get(url: string, options?: baseGetOptions): Promise<unknown>;
}
declare type baseGetOptions = {
    userAgent?: string;
    XML?: boolean;
};
export {};

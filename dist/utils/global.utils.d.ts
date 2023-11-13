declare class Utils {
    static createOtp(): string;
    static createHash(data: string): Promise<string>;
}
export default Utils;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const crypto = require("crypto");
class Utils {
    static createOtp() {
        const digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i += 1) {
            const randomIndex = crypto.randomInt(0, digits.length);
            OTP += digits[randomIndex];
        }
        return OTP;
    }
    static createHash(data) {
        return bcrypt.hash(data, 10);
    }
}
exports.default = Utils;
//# sourceMappingURL=global.utils.js.map
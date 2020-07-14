"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
class CodeGen {
    generate(schema, templateString) {
        const template = handlebars_1.default.compile(templateString);
        let output = template(schema);
        return output;
    }
}
exports.CodeGen = CodeGen;
//# sourceMappingURL=code-gen.js.map
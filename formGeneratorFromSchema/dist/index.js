"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const code_gen_1 = require("./code-gen");
const Handlebars = __importStar(require("handlebars"));
var fs = require('fs');
const change_case_1 = require("change-case");
Handlebars.registerHelper('if_eq', function (a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    }
    else {
        return opts.inverse(this);
    }
});
function enhanceSchema(schema) {
    schema.typePascalCase = change_case_1.pascalCase(schema.typeName);
    schema.typeParamCase = change_case_1.paramCase(schema.typeName);
    for (let propName of Object.keys(schema.properties)) {
        schema.properties[propName].propName = propName;
        schema.properties[propName].propNameCamelCase = change_case_1.camelCase(propName);
        schema.properties[propName].propNameSentenceCase = change_case_1.sentenceCase(propName);
        schema.properties[propName].propNameSnakeCase = change_case_1.snakeCase(propName);
        schema.properties[propName].propNamePascalCase = change_case_1.pascalCase(propName);
        schema.properties[propName].propNameUpperSnakeCase = change_case_1.snakeCase(propName).toLocaleUpperCase();
    }
}
function buildAsset(templatePath, templateName, path, assetName) {
    let templateContent = fs.readFileSync(`${templatePath}${templateName}`, 'utf8');
    let output = codeGen.generate(testSchema, templateContent);
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    let fileName = `${path}\\${assetName}`;
    console.log(`Writing ${path}`);
    fs.writeFileSync(fileName, output);
}
let templateLocation = './templates/angular-forms/';
let basePath = "C:\\dev\\DocStore.Core\\timeSheetAngular\\src\\app";
const codeGen = new code_gen_1.CodeGen();
let testSchema = fs.readFileSync('./schemas/timeSheet.json', { encoding: 'utf8', flag: 'r' });
testSchema = JSON.parse(testSchema);
enhanceSchema(testSchema);
let listComponentName = `list-${testSchema.typeParamCase}`;
let editComponentName = `edit-${testSchema.typeParamCase}`;
let editComponentPath = basePath + editComponentName;
let listComponentPath = basePath + listComponentName;
buildAsset(templateLocation, 'entity.ts.template', editComponentPath, `${editComponentName}.ts`);
buildAsset(templateLocation, 'form-edit.html.template', editComponentPath, `${editComponentName}.component.html`);
buildAsset(templateLocation, 'form-edit.ts.template', editComponentPath, `${editComponentName}.component.ts`);
buildAsset(templateLocation, 'list-entities.ts.template', listComponentPath, `${listComponentName}.component.ts`);
buildAsset(templateLocation, 'list-entities.html.template', listComponentPath, `${listComponentName}.component.html`);
//# sourceMappingURL=index.js.map
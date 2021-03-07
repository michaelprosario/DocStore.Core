import { CodeGen } from "./code-gen"
import * as Handlebars from "handlebars"

var fs = require('fs');
import {
    camelCase,
    paramCase,
    pascalCase,
    sentenceCase,
    snakeCase,
  } from "change-case";

Handlebars.registerHelper('if_eq', function(a, b, opts) {
if (a == b) {
    return opts.fn(this);
} else {
    return opts.inverse(this);
}
});

function enhanceSchema(schema){
    if(!schema.typeName){
        throw new Error("Error - schema.typeName is required");
    }

    schema.typePascalCase = pascalCase(schema.typeName);
    schema.typeParamCase = paramCase(schema.typeName);
    
    for(let propName of Object.keys(schema.properties)) {
        schema.properties[propName].propName = propName;
        schema.properties[propName].propNameCamelCase = camelCase(propName);
        schema.properties[propName].propNameSentenceCase = sentenceCase(propName);
        schema.properties[propName].propNameSnakeCase = snakeCase(propName);
        schema.properties[propName].propNamePascalCase = pascalCase(propName);
        schema.properties[propName].propNameUpperSnakeCase = snakeCase(propName).toLocaleUpperCase();
    }
}

function buildAsset(templatePath, templateName, path, assetName) {
    let templateContent = fs.readFileSync(`${templatePath}${templateName}`, 'utf8');
    let output = codeGen.generate(testSchema, templateContent);

    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }

    let fileName = `${path}//${assetName}`;
    console.log(`Writing ${path}`);
    fs.writeFileSync(fileName, output);
}

let templateLocation = './templates/angular-forms/';
let basePath = "/Users/michaelrosario/Dev/GitHub/DocStore.Core/blogAngular/src/app/";
const codeGen = new CodeGen();
let testSchema = fs.readFileSync('./schemas/post.json', {encoding:'utf8', flag:'r'});
testSchema = JSON.parse(testSchema);
console.log(testSchema);
enhanceSchema(testSchema);


let listComponentName = `list-${testSchema.typeParamCase}`;
let editComponentName = `edit-${testSchema.typeParamCase}`;
let editComponentPath = basePath + editComponentName;
let listComponentPath = basePath + listComponentName;

buildAsset(templateLocation, 'entity.ts.template', editComponentPath, `${editComponentName}.ts`);
buildAsset(templateLocation, 'form-edit.html.template', editComponentPath,`${editComponentName}.component.html`);
buildAsset(templateLocation, 'form-edit.ts.template', editComponentPath, `${editComponentName}.component.ts`);

buildAsset(templateLocation, 'list-entities.ts.template', listComponentPath, `${listComponentName}.component.ts`);
buildAsset(templateLocation, 'list-entities.html.template', listComponentPath, `${listComponentName}.component.html`);

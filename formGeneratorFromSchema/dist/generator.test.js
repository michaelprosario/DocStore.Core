"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_gen_1 = require("./code-gen");
const chai_1 = require("chai");
function getTestSchema() {
    return {
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "http://example.com/example.json",
        "type": "object",
        "title": "Speaker",
        "description": "The root schema comprises the entire JSON document.",
        "required": [
            "bio",
            "blog",
            "company",
            "complexity",
            "github",
            "linkedIn",
            "name",
            "notes",
            "rockstar",
            "shortBio",
            "twitter",
            "id"
        ],
        "properties": {
            "bio": {
                "$id": "#/properties/bio",
                "type": "string",
                "title": "The Bio Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdaf"
                ]
            },
            "blog": {
                "$id": "#/properties/blog",
                "type": "string",
                "title": "The Blog Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsafsa"
                ]
            },
            "company": {
                "$id": "#/properties/company",
                "type": "string",
                "title": "The Company Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsafdsa"
                ]
            },
            "complexity": {
                "$id": "#/properties/complexity",
                "type": "string",
                "title": "The Complexity Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsafdas"
                ]
            },
            "github": {
                "$id": "#/properties/github",
                "type": "string",
                "title": "The Github Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsafdsa"
                ]
            },
            "linkedIn": {
                "$id": "#/properties/linkedIn",
                "type": "string",
                "title": "The Linkedin Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsaf"
                ]
            },
            "name": {
                "$id": "#/properties/name",
                "type": "string",
                "title": "The Name Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsfa"
                ]
            },
            "notes": {
                "$id": "#/properties/notes",
                "type": "string",
                "title": "The Notes Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsa"
                ]
            },
            "rockstar": {
                "$id": "#/properties/rockstar",
                "type": "boolean",
                "title": "The Rockstar Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": false,
                "examples": [
                    false
                ]
            },
            "shortBio": {
                "$id": "#/properties/shortBio",
                "type": "string",
                "title": "The Shortbio Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsafa"
                ]
            },
            "twitter": {
                "$id": "#/properties/twitter",
                "type": "string",
                "title": "The Twitter Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "fdsa"
                ]
            },
            "id": {
                "$id": "#/properties/id",
                "type": "string",
                "title": "The Id Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "c963e232-84ea-414d-ac19-b1b21f2d7d2c"
                ]
            }
        }
    };
}
function getSampleData() {
    return { "bio": "fdaf", "blog": "fdsafsa", "company": "fdsafdsa", "complexity": "fdsafdas", "github": "fdsafdsa", "linkedIn": "fdsaf", "name": "fdsfa", "notes": "fdsa", "rockstar": false, "shortBio": "fdsafa", "twitter": "fdsa", "id": "c963e232-84ea-414d-ac19-b1b21f2d7d2c" };
}
const codeGen = new code_gen_1.CodeGen();
const schema = getTestSchema();
test('codeGen should generate any content with handlebars', () => {
    // arrange
    const template = "Hello Michael";
    // act
    let output = codeGen.generate(schema, template);
    // assert 
    chai_1.assert(output.length > 0);
});
test('codeGen should generate any content based on schema', () => {
    // arrange
    const template = "Test {{title}}";
    // act
    let output = codeGen.generate(schema, template);
    // assert 
    chai_1.assert(output == "Test Speaker");
});
//# sourceMappingURL=generator.test.js.map
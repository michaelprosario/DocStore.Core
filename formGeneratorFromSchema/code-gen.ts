import Handlebars from "handlebars";

export class CodeGen
{
  public generate(schema, templateString: string){
    const template = Handlebars.compile(templateString);
    let output = template(schema);
    return output;
  }
}
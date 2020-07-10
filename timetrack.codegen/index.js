
const { codegen } = require('swagger-axios-codegen')


codegen({
  serviceNameSuffix: 'Service',
  enumNamePrefix: 'Enum',
  methodNameMode: 'operationId',
  outputDir: './service',
  fileName: 'index.ts',
  useStaticMethod: false,
  useCustomerRequestInstance: true,
  include: [],
  strictNullChecks: true,
  /** definition Class mode ,auto use interface mode to streamlined code*/
  modelMode: 'class',
  useClassTransformer: true,
  source: require('./swagger.json')
});
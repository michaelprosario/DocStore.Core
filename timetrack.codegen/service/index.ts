/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

import { Expose, Transform, Type, plainToClass } from 'class-transformer';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty
const basePath = '';

export class DocumentsService {
  /**
   *
   */
  documentsAddDocument(
    params: {
      /**  */
      command: AddDocumentCommand;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<NewRecordResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/AddDocument';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['command'];

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(NewRecordResponse, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   *
   */
  documentsEditDocument(
    params: {
      /**  */
      command: UpdateDocumentCommand;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/EditDocument';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['command'];

      configs.data = data;
      axios(configs, (response: any) => resolve(plainToClass(Response, response, { strategy: 'excludeAll' })), reject);
    });
  }
  /**
   *
   */
  documentsDeleteDocument(
    params: {
      /**  */
      command: DeleteDocumentCommand;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/DeleteDocument';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['command'];

      configs.data = data;
      axios(configs, (response: any) => resolve(plainToClass(Response, response, { strategy: 'excludeAll' })), reject);
    });
  }
  /**
   *
   */
  documentsGetDocumentsByCollection(
    params: {
      /**  */
      query: GetDocumentsByCollection;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetDocumentsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/GetDocumentsByCollection';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['query'];

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(GetDocumentsResponse, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
  /**
   *
   */
  documentsGetDocument(
    params: {
      /**  */
      query: GetDocumentQuery;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetDocumentResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/GetDocument';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['query'];

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(GetDocumentResponse, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class UsersService {
  /**
   *
   */
  usersAuthenticate(
    params: {
      /**  */
      userDto: UserDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Users/Authenticate';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['userDto'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  usersRegisterUser(
    params: {
      /**  */
      command: RegisterUserCommand;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<NewRecordResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/Users/RegisterUser';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['command'];

      configs.data = data;
      axios(
        configs,
        (response: any) => resolve(plainToClass(NewRecordResponse, response, { strategy: 'excludeAll' })),
        reject
      );
    });
  }
}

export class NewRecordResponse {
  constructor(data: undefined | any = {}) {}
}

export class Response {
  /**  */
  @Expose()
  @Type(() => ResponseCode)
  'code': ResponseCode;

  /**  */
  @Expose()
  'message': string;

  /**  */
  @Expose()
  @Type(() => ValidationFailure)
  'validationErrors': ValidationFailure[];

  constructor(data: undefined | any = {}) {
    this['code'] = data['code'];
    this['message'] = data['message'];
    this['validationErrors'] = data['validationErrors'];
  }
}

export class ValidationFailure {
  /**  */
  @Expose()
  'propertyName': string;

  /**  */
  @Expose()
  'errorMessage': string;

  /**  */
  @Expose()
  @Type(() => any | null)
  'attemptedValue': any | null;

  /**  */
  @Expose()
  @Type(() => any | null)
  'customState': any | null;

  /**  */
  @Expose()
  @Type(() => Severity)
  'severity': Severity;

  /**  */
  @Expose()
  'errorCode': string;

  /**  */
  @Expose()
  @Type(() => any | null)
  'formattedMessageArguments': any | null[];

  /**  */
  @Expose()
  'formattedMessagePlaceholderValues': object;

  /**  */
  @Expose()
  'resourceName': string;

  constructor(data: undefined | any = {}) {
    this['propertyName'] = data['propertyName'];
    this['errorMessage'] = data['errorMessage'];
    this['attemptedValue'] = data['attemptedValue'];
    this['customState'] = data['customState'];
    this['severity'] = data['severity'];
    this['errorCode'] = data['errorCode'];
    this['formattedMessageArguments'] = data['formattedMessageArguments'];
    this['formattedMessagePlaceholderValues'] = data['formattedMessagePlaceholderValues'];
    this['resourceName'] = data['resourceName'];
  }
}

export class AddDocumentCommand {
  constructor(data: undefined | any = {}) {}
}

export class Doc {
  constructor(data: undefined | any = {}) {}
}

export class BaseEntity {
  /**  */
  @Expose()
  'id': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
  }
}

export class Request {
  /**  */
  @Expose()
  'userId': string;

  constructor(data: undefined | any = {}) {
    this['userId'] = data['userId'];
  }
}

export class UpdateDocumentCommand {
  constructor(data: undefined | any = {}) {}
}

export class DeleteDocumentCommand {
  constructor(data: undefined | any = {}) {}
}

export class GetDocumentsResponse {
  constructor(data: undefined | any = {}) {}
}

export class GetDocumentsByCollection {
  constructor(data: undefined | any = {}) {}
}

export class GetDocumentResponse {
  constructor(data: undefined | any = {}) {}
}

export class GetDocumentQuery {
  constructor(data: undefined | any = {}) {}
}

export class UserDto {
  /**  */
  @Expose()
  'id': string;

  /**  */
  @Expose()
  'firstName': string;

  /**  */
  @Expose()
  'lastName': string;

  /**  */
  @Expose()
  'username': string;

  /**  */
  @Expose()
  'password': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['firstName'] = data['firstName'];
    this['lastName'] = data['lastName'];
    this['username'] = data['username'];
    this['password'] = data['password'];
  }
}

export class RegisterUserCommand {
  /**  */
  @Expose()
  'firstName': string;

  /**  */
  @Expose()
  'lastName': string;

  /**  */
  @Expose()
  'userName': string;

  /**  */
  @Expose()
  'password': string;

  constructor(data: undefined | any = {}) {
    this['firstName'] = data['firstName'];
    this['lastName'] = data['lastName'];
    this['userName'] = data['userName'];
    this['password'] = data['password'];
  }
}

export type ResponseCode = 200 | 400 | 404 | 405;

export type Severity = 0 | 1 | 2;

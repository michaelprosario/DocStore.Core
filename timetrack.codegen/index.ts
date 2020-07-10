/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

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
  static documentsAddDocument(
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
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static documentsEditDocument(
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
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static documentsDeleteDocument(
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
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static documentsGetDocumentsByCollection(
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
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static documentsGetDocument(
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
      axios(configs, resolve, reject);
    });
  }
}

export class UsersService {
  /**
   *
   */
  static usersAuthenticate(
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
  static usersRegisterUser(
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
      axios(configs, resolve, reject);
    });
  }
}

export interface NewRecordResponse {}

export interface Response {
  /**  */
  code: ResponseCode;

  /**  */
  message: string;

  /**  */
  validationErrors: ValidationFailure[];
}

export interface ValidationFailure {
  /**  */
  propertyName: string;

  /**  */
  errorMessage: string;

  /**  */
  attemptedValue: any | null;

  /**  */
  customState: any | null;

  /**  */
  severity: Severity;

  /**  */
  errorCode: string;

  /**  */
  formattedMessageArguments: any | null[];

  /**  */
  formattedMessagePlaceholderValues: object;

  /**  */
  resourceName: string;
}

export interface AddDocumentCommand {}

export interface Doc {}

export interface BaseEntity {
  /**  */
  id: string;
}

export interface Request {
  /**  */
  userId: string;
}

export interface UpdateDocumentCommand {}

export interface DeleteDocumentCommand {}

export interface GetDocumentsResponse {}

export interface GetDocumentsByCollection {}

export interface GetDocumentResponse {}

export interface GetDocumentQuery {}

export interface UserDto {
  /**  */
  id: string;

  /**  */
  firstName: string;

  /**  */
  lastName: string;

  /**  */
  username: string;

  /**  */
  password: string;
}

export interface RegisterUserCommand {
  /**  */
  firstName: string;

  /**  */
  lastName: string;

  /**  */
  userName: string;

  /**  */
  password: string;
}

export type ResponseCode = 200 | 400 | 404 | 405;

export type Severity = 0 | 1 | 2;

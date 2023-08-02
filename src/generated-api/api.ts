/* tslint:disable */
/* eslint-disable */
/**
 * Jobs API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateJobRequest
 */
export interface CreateJobRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateJobRequest
     */
    'company': string;
    /**
     * 
     * @type {string}
     * @memberof CreateJobRequest
     */
    'position': string;
}
/**
 * 
 * @export
 * @interface LoginUserRequest
 */
export interface LoginUserRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof LoginUserRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RegisterUserRequest
 */
export interface RegisterUserRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterUserRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UpdateJobRequest
 */
export interface UpdateJobRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateJobRequest
     */
    'company': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateJobRequest
     */
    'position': string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login User
         * @param {LoginUserRequest} loginUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: async (loginUserRequest: LoginUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginUserRequest' is not null or undefined
            assertParamExists('loginUser', 'loginUserRequest', loginUserRequest)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Register User
         * @param {RegisterUserRequest} registerUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (registerUserRequest: RegisterUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerUserRequest' is not null or undefined
            assertParamExists('registerUser', 'registerUserRequest', registerUserRequest)
            const localVarPath = `/auth/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login User
         * @param {LoginUserRequest} loginUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginUser(loginUserRequest: LoginUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginUser(loginUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Register User
         * @param {RegisterUserRequest} registerUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(registerUserRequest: RegisterUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerUser(registerUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Login User
         * @param {LoginUserRequest} loginUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser(loginUserRequest: LoginUserRequest, options?: any): AxiosPromise<void> {
            return localVarFp.loginUser(loginUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register User
         * @param {RegisterUserRequest} registerUserRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser(registerUserRequest: RegisterUserRequest, options?: any): AxiosPromise<void> {
            return localVarFp.registerUser(registerUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Login User
     * @param {LoginUserRequest} loginUserRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public loginUser(loginUserRequest: LoginUserRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).loginUser(loginUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register User
     * @param {RegisterUserRequest} registerUserRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public registerUser(registerUserRequest: RegisterUserRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).registerUser(registerUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Job
         * @param {CreateJobRequest} createJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJob: async (createJobRequest: CreateJobRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createJobRequest' is not null or undefined
            assertParamExists('createJob', 'createJobRequest', createJobRequest)
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createJobRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteJob', 'id', id)
            const localVarPath = `/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get All Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllJobs: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Single Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleJob: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSingleJob', 'id', id)
            const localVarPath = `/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Job
         * @param {string} id The job ID
         * @param {UpdateJobRequest} updateJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateJob: async (id: string, updateJobRequest: UpdateJobRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateJob', 'id', id)
            // verify required parameter 'updateJobRequest' is not null or undefined
            assertParamExists('updateJob', 'updateJobRequest', updateJobRequest)
            const localVarPath = `/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateJobRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Job
         * @param {CreateJobRequest} createJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createJob(createJobRequest: CreateJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createJob(createJobRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteJob(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteJob(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get All Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllJobs(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllJobs(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Single Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleJob(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleJob(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Job
         * @param {string} id The job ID
         * @param {UpdateJobRequest} updateJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateJob(id: string, updateJobRequest: UpdateJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateJob(id, updateJobRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Job
         * @param {CreateJobRequest} createJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJob(createJobRequest: CreateJobRequest, options?: any): AxiosPromise<void> {
            return localVarFp.createJob(createJobRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteJob(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get All Jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllJobs(options?: any): AxiosPromise<void> {
            return localVarFp.getAllJobs(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Single Job
         * @param {string} id The job ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleJob(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.getSingleJob(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Job
         * @param {string} id The job ID
         * @param {UpdateJobRequest} updateJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateJob(id: string, updateJobRequest: UpdateJobRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateJob(id, updateJobRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export class JobsApi extends BaseAPI {
    /**
     * 
     * @summary Create Job
     * @param {CreateJobRequest} createJobRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public createJob(createJobRequest: CreateJobRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).createJob(createJobRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Job
     * @param {string} id The job ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public deleteJob(id: string, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).deleteJob(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get All Jobs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public getAllJobs(options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getAllJobs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Single Job
     * @param {string} id The job ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public getSingleJob(id: string, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getSingleJob(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Job
     * @param {string} id The job ID
     * @param {UpdateJobRequest} updateJobRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public updateJob(id: string, updateJobRequest: UpdateJobRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).updateJob(id, updateJobRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


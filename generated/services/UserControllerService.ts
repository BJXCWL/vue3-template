/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param loginName
     * @param password
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static login(
        loginName: string,
        password: string,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/login',
            query: {
                'loginName': loginName,
                'password': password,
            },
        });
    }
    /**
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static isLogin(): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/isLogin',
        });
    }
    /**
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getLoginUser(): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/getLoginUser',
        });
    }
}

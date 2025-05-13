/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { WordPools } from '../models/WordPools';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WordPoolsControllerService {
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getWordPoolsById(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wordPools/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static updateWordPools(
        id: number,
        requestBody: WordPools,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/wordPools/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static deleteWordPools(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/wordPools/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static addWordPools(
        requestBody: WordPools,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wordPools',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param pageNum
     * @param pageSize
     * @param name
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getWordPoolsPage(
        pageNum: number = 1,
        pageSize: number = 10,
        name?: string,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wordPools/page',
            query: {
                'pageNum': pageNum,
                'pageSize': pageSize,
                'name': name,
            },
        });
    }
    /**
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getAllWordPools(): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wordPools/getAllWordPools',
        });
    }
    /**
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static deleteWordPoolsBatch(
        requestBody: Array<number>,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/wordPools/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

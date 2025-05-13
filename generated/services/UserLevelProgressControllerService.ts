/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { UserLevelProgress } from '../models/UserLevelProgress';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserLevelProgressControllerService {
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getProgressById(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-level-progress/{id}',
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
    public static updateProgressById(
        id: number,
        requestBody: UserLevelProgress,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user-level-progress/{id}',
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
    public static deleteProgressById(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user-level-progress/{id}',
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
    public static saveOrUpdateProgress(
        requestBody: UserLevelProgress,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-level-progress',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param userId
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getUserProgressList(
        userId: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-level-progress/user/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param userId
     * @param levelId
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getUserAndLevelProgress(
        userId: number,
        levelId: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-level-progress/user/{userId}/level/{levelId}',
            path: {
                'userId': userId,
                'levelId': levelId,
            },
        });
    }
}

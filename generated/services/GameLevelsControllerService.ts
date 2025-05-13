/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { GameLevels } from '../models/GameLevels';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GameLevelsControllerService {
    /**
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static updateLevel(
        requestBody: GameLevels,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/game-levels/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static createLevel(
        requestBody: GameLevels,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/game-levels/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getLevel(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/game-levels/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static listAll(): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/game-levels/list',
        });
    }
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static getLevelDetail(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/game-levels/levelDetail/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static deleteLevel(
        id: number,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/game-levels/delete/{id}',
            path: {
                'id': id,
            },
        });
    }
}

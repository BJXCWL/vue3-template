/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiControllerService {
    /**
     * @param imgUrl
     * @param word
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static checkImage(
        imgUrl: string,
        word: string,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai/checkImage',
            query: {
                'imgUrl': imgUrl,
                'word': word,
            },
        });
    }
}

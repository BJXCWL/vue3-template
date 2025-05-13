/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AjaxResult } from '../models/AjaxResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileUploadControllerService {
    /**
     * @param requestBody
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static uploadFile(
        requestBody?: {
            file: Blob;
        },
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/upload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param objectName
     * @returns AjaxResult OK
     * @throws ApiError
     */
    public static deleteFile(
        objectName: string,
    ): CancelablePromise<AjaxResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/file/delete',
            query: {
                'objectName': objectName,
            },
        });
    }
}

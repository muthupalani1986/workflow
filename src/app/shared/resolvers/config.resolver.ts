import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ConfigService } from "../services/config/config.service";
import * as _ from 'lodash';
import { SessionStorageService } from "../services/storage/session-storage.service";
import { SESSION_STORAGE } from "../constants/session-storage.constant";
export const configResolver: ResolveFn<any> = () => {
    const _configServive = inject(ConfigService);
    const _sessionStorageService = inject(SessionStorageService);

    return new Promise((resolve, reject) => {
        _configServive.config().subscribe({
            next: (res) => {
                const statusCode = _.get(res, 'responseMetaData.statusCode');
                console.log("statusCode",statusCode);
                if (statusCode === '0000') {
                    //_sessionStorageService.setItem(SESSION_STORAGE.config, res);
                    _configServive.setConfigData(res);
                }
                resolve(_.get(res, 'responsePayload'));
            }, error: (err) => {
                resolve(err);
            }
        });
    });

}
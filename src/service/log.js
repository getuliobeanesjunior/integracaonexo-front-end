import {api} from './api'

export const allLogs = function () {
    return api.get('/logs')
}
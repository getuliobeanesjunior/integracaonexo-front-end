import { api } from './api'

export const callWorkFuncionario = () => {
    return api.post("workers/funcionario")
}

export const callWorkEmpresa = () => {
    return api.post("workers/empresa")
}

export const callWorkCargo = () => {
    return api.post("workers/cargo")
}

export const callWorkSetor = () => {
    return api.post("workers/setor")
}
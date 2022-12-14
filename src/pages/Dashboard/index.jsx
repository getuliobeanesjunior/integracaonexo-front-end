import { useState, useEffect } from 'react';
import './styles.css'
import { toast } from "react-toastify";

import Modal from '../../components/Modal';

// Requests
import { allLogs } from '../../service/log'
import {
    callWorkCargo,
    callWorkEmpresa,
    callWorkFuncionario,
    callWorkSetor,
} from '../../service/work'

const DashboardPage = () => {
    const [isModalManual, setIsModalManual] = useState(false)
    const [isModalLogS, setIsModalLogS] = useState(false)
    const [isModalLogF, setIsModalLogF] = useState(false)
    const [listLogs, setListLogs] = useState([])
    const [works, setWorks] = useState([])

    function handleCallWork() {
        const stackPromises = []

        if(works.workCargo == true) stackPromises.push({ nameCall: "Cargo", callback: callWorkCargo })
        if(works.workEmpresa == true) stackPromises.push({ nameCall: "Empresa", callback: callWorkEmpresa })
        if(works.workFuncionario == true) stackPromises.push({ nameCall: "Funcionario", callback: callWorkFuncionario })
        if(works.workSetor == true) stackPromises.push({ nameCall: "Setor", callback: callWorkSetor })

        stackPromises.map(workRequest => {
            workRequest.callback().then(result => {
                toast.success('Work executado com sucesso!');
            }).catch(error => {
                toast.error('Erro na execução do Work!');
            })
        })
    }

    useEffect(() => {
        allLogs().then(resultAllLogs => {
            setListLogs(resultAllLogs.data)
            toast.success('Logs atualizado');
        }).catch(error => {
            toast.error('Erro na atualização dos logs!');
        })
    }, [])

    return (
        <div className="d-flex flex-column flex-root">
            <div className="page launcher sidebar-enabled d-flex flex-row flex-column-fluid me-lg-5" id="kt_page">
                <div className="d-flex flex-row-fluid">
                    <div className="d-flex flex-column flex-row-fluid align-items-center">
                        <div className="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">
                            <div className="d-flex flex-center pt-10 pt-lg-0 mb-10 mb-lg-0 h-lg-225px">
                                <div className="btn btn-icon btn-active-color-primary w-30px h-30px d-lg-none me-4 ms-n15" id="kt_sidebar_toggle">
                                    <span className="svg-icon svg-icon-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h1 className="text-white fw-bolder mb-3">Conexões</h1>
                                </div>
                            </div>
                            <div className="row g-7 w-xxl-850px">
                                <div className="col-xxl-12">
                                    <div className="row g-lg-7">
                                        <div className="col-sm-6">
                                            <button onClick={() => setIsModalManual(true)} className="card border-0 shadow-none min-h-200px mb-7 create">
                                                <div className="card-body d-flex flex-column flex-center text-center">
                                                    <img className="mw-100 h-100px mb-7 mx-auto" src="/src/assets/4.png" />
                                                    <h4 className="text-white fw-bold text-uppercase">Inserir Manualmente</h4>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button onClick={() => setIsModalLogS(true)} className="card border-0 shadow-none min-h-200px mb-7 logSuc">
                                                <div className="card-body d-flex flex-column flex-center text-center">
                                                    <img className="mw-100 h-100px mb-7 mx-auto" src="/src/assets/5.png" />
                                                    <h4 className="text-white fw-bold text-uppercase">Log Sucesso</h4>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsModalLogF(true)} className="card border-0 shadow-none min-h-200px logFail">
                                        <div className="card-body d-flex flex-center flex-wrap">
                                            <img className="mw-100 h-200px me-4 mb-5 mb-lg-0" src="/src/assets/5.png" />
                                            <div className="d-flex flex-column align-items-center align-items-md-start flex-grow-1" data-theme="light">
                                                <h3 className="text-gray-900 fw-bolder text-uppercase mb-5">Log Error</h3>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="kt_sidebar" className="sidebar px-5 py-5 py-lg-8 px-lg-11" data-kt-drawer="true" data-kt-drawer-name="sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="375px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_sidebar_toggle">
                    <div className="d-flex flex-stack mb-5 mb-lg-8" id="kt_sidebar_header">
                        <h2 className="text-white">Logs</h2>
                    </div>
                    <div className="mb-5 mb-lg-8" id="kt_sidebar_body">
                        <div className="hover-scroll-y me-n6 pe-6" id="kt_sidebar_body" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_sidebar_header, #kt_sidebar_footer" data-kt-scroll-wrappers="#kt_page, #kt_sidebar, #kt_sidebar_body" data-kt-scroll-offset="0">
                            <div className="timeline">
                                {listLogs.map(log => (
                                    <div className="timeline-item">
                                        <div className="timeline-line w-40px"></div>
                                        <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-2 svg-icon-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                                                        <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="timeline-content mb-10 mt-n1">
                                            <div className="pe-3 mb-5">
                                                <div className="fs-5 fw-semibold mb-2 text-white">{log.message}</div>
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    <div className="text-white opacity-50 me-2 fs-7">{log.created_at.replace(/-/g,"/").replace(/T/g," ").slice(0,19)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalManual ? <Modal onClose={() => setIsModalManual(false)}>
                <div className='class="mx-auto mw-600px w-100 py-10 fv-plugins-bootstrap5 fv-plugins-framework"'>
                    <div className='current'>
                        <div className='w-100'>
                            <div className='pb-10 pb-lg-15'>
                                <h2 class="fw-bold d-flex align-items-center text-dark">Ativar Manualmente</h2>
                                <div class="text-muted fw-semibold fs-6">Para iniciar quando for necessario </div>
                            </div>
                            <div class="fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input onChange={(e) => { setWorks(current => {return {...current, "workFuncionario":e.target.checked}}) }} type="checkbox" class="btn-check" name="account_type" id="kt_create_account_form_account_type_funcionario" />
                                        <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 manual" for="kt_create_account_form_account_type_funcionario">
                                            <span class="d-block fw-semibold text-start">
                                                <span class="text-dark fw-bold d-block fs-4 mb-2">Funcionário</span>
                                                <span class="text-muted fw-semibold fs-6">Rota de adição de funcionário</span>
                                            </span>
                                        </label>
                                        <div class="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <input onChange={(e) => { setWorks(current => {return {...current, "workEmpresa":e.target.checked}}) }} type="checkbox" class="btn-check" name="account_type" value="empresa" id="kt_create_account_form_account_type_empresa" />
                                        <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" for="kt_create_account_form_account_type_empresa">
                                            <span class="d-block fw-semibold text-start">
                                                <span class="text-dark fw-bold d-block fs-4 mb-2">Empresa</span>
                                                <span class="text-muted fw-semibold fs-6">Rota de adição de empresa</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input onChange={(e) => { setWorks(current => {return {...current, "workCargo":e.target.checked}}) }} type="checkbox" class="btn-check" name="account_type" value="cargo" id="kt_create_account_form_account_type_cargo" />
                                        <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 manual" for="kt_create_account_form_account_type_cargo">
                                            <span class="d-block fw-semibold text-start">
                                                <span class="text-dark fw-bold d-block fs-4 mb-2">Cargo</span>
                                                <span class="text-muted fw-semibold fs-6">Rota de adição de cargo</span>
                                            </span>
                                        </label>
                                        <div class="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <input onChange={(e) => { setWorks(current => {return {...current, "workSetor":e.target.checked}}) }} type="checkbox" class="btn-check" name="account_type" value="setor" id="kt_create_account_form_account_type_setor" />
                                        <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" for="kt_create_account_form_account_type_setor">
                                            <span class="d-block fw-semibold text-start">
                                                <span class="text-dark fw-bold d-block fs-4 mb-2">Setor</span>
                                                <span class="text-muted fw-semibold fs-6">Rota de adição de setor</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleCallWork} type="button" class="btn btn-lg btn-primary me-3 buttonManual">
                                    <span class="indicator-label">Executar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal> : null}
            {isModalLogS ? <Modal onClose={() => setIsModalLogS(false)}>
                <div className="stepper stepper-links d-flex flex-column between">
                    <div className="container">
                        <div className="mx-auto w-100 mw-600px pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework">
                            <div className="current">
                                <div className="w-100">
                                    <h2 className="mb-2"> Logs Sucesso</h2>
                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                    {listLogs.map(log => {
                                        if(log.integration_success == true) {
                                            return (
                                                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">{log.message}</div>
                                                            <div className="fw-semibold text-muted mb-2">{log.created_at.replace(/-/g,"/").replace(/T/g," ").slice(0,19) + "   " + log.integration_type}</div>
                                                            <div className="fw-semibold text-muted">{JSON.stringify(log.sent_json, null, 4).replace(/["{[,\\}\]]/g, "\n")}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </Modal> : null}
            {isModalLogF ? <Modal onClose={() => setIsModalLogF(false)}>
                <div className="stepper stepper-links d-flex flex-column between">
                    <div className="container">
                        <div className="mx-auto w-100 mw-600px pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework">
                            <div className="current">
                                <div className="w-100">
                                    <h2 className="fmb-2"> Logs Error</h2>
                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                        {listLogs.map(log => {
                                            if(log.integration_success == false){
                                                return (
                                                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">{log.message}</div>
                                                            <div className="fw-semibold text-muted mb-2">{log.created_at.replace(/-/g,"/").replace(/T/g," ").slice(0,19) + "   " + log.integration_type}</div>
                                                            <div className="fw-semibold text-muted">{JSON.stringify(log.sent_json, null, 4).replace(/["{[,\\}\]]/g, "\n")}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </Modal> : null} 
        </div>
    )
}

export default DashboardPage;

import { useState } from 'react';
import './styles.css'

import Modal from '../../components/Modal';

const DashboardPage = () => {
    const [isModalManual, setIsModalManual] = useState(false)
    const [isModalLogS, setIsModalLogS] = useState(false)
    const [isModalLogF, setIsModalLogF] = useState(false)
    return(
        <div class="d-flex flex-column flex-root">
            <div class="page launcher sidebar-enabled d-flex flex-row flex-column-fluid me-lg-5" id="kt_page">
                <div class="d-flex flex-row-fluid">
                    <div class="d-flex flex-column flex-row-fluid align-items-center">
                        <div class="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">
                            <div class="d-flex flex-center pt-10 pt-lg-0 mb-10 mb-lg-0 h-lg-225px">
                                <div class="btn btn-icon btn-active-color-primary w-30px h-30px d-lg-none me-4 ms-n15" id="kt_sidebar_toggle">
                                    <span class="svg-icon svg-icon-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h1 class="text-white fw-bolder mb-3">Conexões</h1>
                                </div>
                            </div>
                            <div class="row g-7 w-xxl-850px">
                                <div class="col-xxl-12">
                                    <div class="row g-lg-7">
                                        <div class="col-sm-6">
                                            <button onClick={() => setIsModalManual(true)} class="card border-0 shadow-none min-h-200px mb-7 create">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <img class="mw-100 h-100px mb-7 mx-auto" src="/src/assets/4.png" />
                                                    <h4 class="text-white fw-bold text-uppercase">Inserir Manualmente</h4>
                                                </div>
                                            </button>
                                        </div>
                                        <div class="col-sm-6">
                                            <button onClick={() => setIsModalLogS(true)} class="card border-0 shadow-none min-h-200px mb-7 logSuc">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <img class="mw-100 h-100px mb-7 mx-auto" src="/src/assets/5.png" />
                                                    <h4 class="text-white fw-bold text-uppercase">Log Sucesso</h4>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsModalLogF(true)} class="card border-0 shadow-none min-h-200px logFail">
                                        <div class="card-body d-flex flex-center flex-wrap">
                                            <img class="mw-100 h-200px me-4 mb-5 mb-lg-0" src="/src/assets/5.png" />
                                            <div class="d-flex flex-column align-items-center align-items-md-start flex-grow-1" data-theme="light">
                                                <h3 class="text-gray-900 fw-bolder text-uppercase mb-5">Log Error</h3>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="kt_sidebar" class="sidebar px-5 py-5 py-lg-8 px-lg-11" data-kt-drawer="true" data-kt-drawer-name="sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="375px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_sidebar_toggle">
                    <div class="d-flex flex-stack mb-5 mb-lg-8" id="kt_sidebar_header">
                        <h2 class="text-white">Logs</h2>
                    </div>
                    <div class="mb-5 mb-lg-8" id="kt_sidebar_body">
                        <div class="hover-scroll-y me-n6 pe-6" id="kt_sidebar_body" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_sidebar_header, #kt_sidebar_footer" data-kt-scroll-wrappers="#kt_page, #kt_sidebar, #kt_sidebar_body" data-kt-scroll-offset="0">
                            <div class="timeline">
                                <div class="timeline-item">
                                    <div class="timeline-line w-40px"></div>
                                    <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div class="symbol-label">
                                            <span class="svg-icon svg-icon-2 svg-icon-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                                                    <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content mb-10 mt-n1">
                                        <div class="pe-3 mb-5">
                                            <div class="fs-5 fw-semibold mb-2 text-white">Created 2 new tasks in "Development"</div>
                                            <div class="d-flex align-items-center mt-1 fs-6">
                                                <div class="text-white opacity-50 me-2 fs-7">Enivado em 4:23 PM </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-line w-40px"></div>
                                    <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div class="symbol-label">
                                            <span class="svg-icon svg-icon-2 svg-icon-white">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                                                    <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content mb-10 mt-n1">
                                        <div class="pe-3 mb-5">
                                            <div class="fs-5 fw-semibold mb-2 text-white">2 new entries in "Landing Page"</div>
                                            <div class="d-flex align-items-center mt-1 fs-6">
                                                <div class="text-white opacity-50 me-2 fs-7">Enviado em 4:23 PM </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            {isModalManual ? <Modal onClose={() => setIsModalManual(false)}>
                <h1>testando1</h1>
            </Modal> : null}   
            {isModalLogS ? <Modal onClose={() => setIsModalLogS(false)}>
                <h1>testando2</h1>
            </Modal> : null}
            {isModalLogF ? <Modal onClose={() => setIsModalLogF(false)}>
                <h1>testando3</h1>
            </Modal> : null} 
        </div>
    )
}

export default DashboardPage;
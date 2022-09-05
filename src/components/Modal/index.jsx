import './styles.css';

const Modal = ({ onClose = () => {}, children }) => {
    return (
        <div class="modal fade">
            <div class="modal-dialog modal-fullscreen p-9">
                <div class="modal-content">
                    <div class="modal-header header-bg">
                        <h2 class="text-white"> Visualizar</h2>
                        <button onClick={onClose} class="btn btn-sm btn-icon btn-color-white btn-active-color-primary" data-bs-dismiss="modal">
                            <span class="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="modal-body scroll-y m-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ open, onClose, children }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            console.log('open')
            dialog.current.showModal();
        } else {
            console.log('close')
            dialog.current.close();
        }
    }, [open])

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {/* open될 때만 children이 렌더링되게 함으로써 DeleteConfirmation 컴포넌트에서 setTimeout이 App 컴포넌트가 실행될때마다 실행되게 하지 않는다. */}
            {open ? children : null}
        </dialog>,
        document.getElementById('modal')
    );
};

export default Modal;
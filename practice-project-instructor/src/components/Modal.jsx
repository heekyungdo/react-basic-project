import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();

    // 컴포넌트 밖에서 호출된 함수 노출하기 위해 사용
    // 첫 번째 값은 ref 전달
    // 두 번째 값은 리액트가 호출할 함수 필요 => 여기에서 반환하는 객체가 다른 컴포넌트로 속성이나 함수를 노출하게 된다.
    useImperativeHandle(ref, () => {
        return {
            // open 메소드는 이 컴포넌트에서 다른 컴포넌트에 제공하는 메소드.
            open() {
                // showModal은 내장 대화상자 요소(<dialog ref={dialog}>{children}</dialog>)가 공급한 메소드
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog}>
            {children}
        </dialog>
        , document.getElementById('modal-root'));
});

export default Modal;
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRaminingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    // onClose={onReset} 속성은 esc로 닫을 경우. 이렇게 속성을 안줘도 esc키로 닫히긴 하지만,
    // onReset함수가 트리거 되는 건 아니야. 
    return <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>Your lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRaminingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal;
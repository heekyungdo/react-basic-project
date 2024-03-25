import InputForm from "./InputForm";

function Calculator() {
    return (
        <div id="user-input">
            <div className='input-group'>
                <InputForm name='INITIAL INVESTMEMT' />
                <InputForm name='ANNUAL INVESTMEMT' />
            </div>
            <div className='input-group'>
                <InputForm name='EXPECTED RETURN' />
                <InputForm name='DURATION' />
            </div>

        </div>
    )
}

export default Calculator;
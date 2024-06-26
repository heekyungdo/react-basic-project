function InputForm({ onChange, inputValue }) {

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                        required
                        value={inputValue.initialInvestment}
                        // event.target.value는 문자열로 반환된다.
                        onChange={(event) =>
                            onChange('initialInvestment', event.target.value)
                        } />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                        required
                        value={inputValue.annualInvestment}
                        onChange={(event) =>
                            onChange('annualInvestment', event.target.value)
                        } />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                        required
                        value={inputValue.expectedReturn}
                        onChange={(event) =>
                            onChange('expectedReturn', event.target.value)
                        } />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                        required
                        value={inputValue.duration}
                        onChange={(event) =>
                            onChange('duration', event.target.value)
                        } />
                </p>
            </div>
        </section>
    )
}

export default InputForm;
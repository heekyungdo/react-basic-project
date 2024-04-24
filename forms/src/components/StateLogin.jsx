import { useState } from "react";

export default function StateLogin() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    // 수정읋 했고, 이메일에 @가 포함되어 있지 않으면
    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

    function handleSumbit(event) {
        event.preventDefault();
        console.log(enteredValues)
    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: false
        }))
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: true
        }))
    }

    return (
        <form onSubmit={handleSumbit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => handleInputBlur('email')}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                        value={enteredValues.email} />
                    <div className="control-error">
                        {emailIsInvalid && <p>Please enter a valid email address.</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleInputChange('password', event.target.value)}
                        value={enteredValues.password} />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSumbit}>Login</button>
            </p>
        </form>
    );
}

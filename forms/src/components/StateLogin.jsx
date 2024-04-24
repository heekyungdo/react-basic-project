import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

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
    const emailIsInvalid =
        didEdit.email &&
        !isEmail(enteredValues.email) &&
        !isNotEmpty(enteredValues.email);

    const passwordInvalid =
        didEdit.password &&
        !hasMinLength(enteredValues.password, 6) &&
        !isNotEmpty(enteredValues.password);

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
                <Input
                    label='Email'
                    id='email'
                    type="email"
                    name="email"
                    onBlur={() => handleInputBlur('email')}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                    value={enteredValues.email}
                    error={emailIsInvalid && 'Please enter a valid email!'}
                />

                <Input
                    label='Password'
                    id='password'
                    type="password"
                    name="password"
                    onBlur={(event) => handleInputBlur('password')}
                    onChange={(event) => handleInputChange('password', event.target.value)}
                    value={enteredValues.password}
                    error={passwordInvalid && 'Please enter a valid password!'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSumbit}>Login</button>
            </p>
        </form>
    );
}

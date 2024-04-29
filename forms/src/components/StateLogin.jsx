import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function StateLogin() {

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));


    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));

    function handleSumbit(event) {
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }
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
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={emailHasError && 'Please enter a valid email!'}
                />

                <Input
                    label='Password'
                    id='password'
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={passwordHasError && 'Please enter a valid password!'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSumbit}>Login</button>
            </p>
        </form>
    );
}

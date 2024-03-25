import useState from 'react';
import { calculateInvestmentResults } from '../util/investment';

function InputForm({ name }) {

    return (
        <>
            <form>
                <label htmlFor={name}>
                    {name}
                    <input id={name} type="number"/>
                </label>
            </form>
        </>
    )
}

export default InputForm;
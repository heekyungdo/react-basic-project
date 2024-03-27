import { calculateInvestmentResults, formatter } from "../util/investment";
const TITLES = [
    { id: 1, title: 'Year' },
    { id: 2, title: 'Investment Value' },
    { id: 3, title: 'Interest (Year)' },
    { id: 4, title: 'Total Interest' },
    { id: 5, title: 'Invested Capital' },
];

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    {TITLES.map((title => (
                        <th key={title.id}>{title.title}</th>
                    )))}
                </tr>
            </thead>
            <tbody>
                {resultsData.map((result) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;

                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    )
}

export default Results;
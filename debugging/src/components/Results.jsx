import { calculateInvestmentResults, formatter } from '../util/investment.js';

// strict mode로 설정했어도 results함수 밖에 있으므로 한번만 실행 
// const results = []; // results함수 밖에 선언하면 에러 발생

// strict mode로 인해 results함수는 두번 실행
export default function Results({ input }) {

  // results 함수 안에 선언하면 results함수와 같이 두번 실행되어 에러발생하지 않아.
  const results = [];

  calculateInvestmentResults(input, results);

  if (results.length === 0) {
    return <p className="center">Invalid input data provided.</p>
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

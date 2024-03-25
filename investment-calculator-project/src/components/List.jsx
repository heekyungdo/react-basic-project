const CATEGORIES = [
    { id: 1, title: 'Year' },
    { id: 2, title: 'Investment Value' },
    { id: 3, title: 'Interest (Year)' },
    { id: 4, title: 'Total Interest' },
    { id: 5, title: 'Invested Capital' },
];

function List() {
    return (
        <table id="result">
            <tr>
                {CATEGORIES.map((category => (
                    <th id={category.id}>{category.title}</th>
                )))}
            </tr>
            <tr>
                <td></td>
               
            </tr>
        </table>
    )
}

export default List;
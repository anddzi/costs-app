import './CostDate.css';
function CostDate(props) {
    const year = props.date.getFullYear('de-DE', {year: "long"})
    const month = props.date.toLocaleString('de-DE', {month: "long"})
    const day = props.date.toLocaleString('de-DE', {month: "2-digit"})

    return(
        <div className={'cost-date'}>
            <div className={'cost-date__year'}>{year}</div>
            <div className={'cost-date__month'}>{month}</div>
            <div className={'cost-date__month'}>{day}</div>
        </div>
    )
}

export default CostDate;

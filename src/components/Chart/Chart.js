import BarChart from "./BarChart";
import   "./Chart.css";
function Chart({expenses}) {
    

    const dataPoints = expenses.map((expense) => {
        
        return [expense.date.toLocaleString('en-US', { month: "long" }), expense.amount]
    })
    return (

        <div className="chart">
           { dataPoints.map((dataPoint) =><BarChart dataPoint={dataPoint} />)}
            <div className="barChart-fill" style={{ height: 50, width: 10 }}>
                =
            </div>

        </div>
    );
        
}

export default Chart;
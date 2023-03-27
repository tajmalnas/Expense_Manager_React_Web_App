import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    
    let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
  return (
    <div className='chart'>
        {props.dataPoints.map(d=><ChartBar key={d.label} value={d.value} maxValue={totalMax} label={d.label}/>)}
    </div>
  )
}

export default Chart
// BloodPressureChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import heart from '../HealthCareDashboard/HeartBPM.svg'
import temperature from '../HealthCareDashboard/temperature.svg'
import resp from '../HealthCareDashboard/respiratoryrate.svg'
import ArrowDown from '../HealthCareDashboard/ArrowDown.svg'
import arrowup from '../HealthCareDashboard/ArrowUp.svg'
import expand from '../HealthCareDashboard/expand_more_FILL0_wght300_GRAD0_opsz24.svg'

Chart.register(...registerables);





const BloodPressureChart = ({ diagnosisHistory }) => {
    const [chartData, setChartData] = useState(null);
  

    useEffect(() => {
        const labels = [];
        const systolicData = [];
        const diastolicData = [];

        diagnosisHistory.forEach((entry) => {
            const monthYear = `${entry.month} ${entry.year}`;
            labels.push(monthYear);
            systolicData.push(entry.blood_pressure.systolic.value);
            diastolicData.push(entry.blood_pressure.diastolic.value);
        });

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Systolic Blood Pressure',
                    data: systolicData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false,
                },
                {
                    label: 'Diastolic Blood Pressure',
                    data: diastolicData,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: false,
                },
            ],
        });
    }, []);
  
  

    return (
        <div>
            <h2>Diagnosis History</h2>
            {chartData?
            <div>

{/* overall wrapper */}
<div style={{
    backgroundColor:'#F4F0FE'
}} className='flex flex-row rounded-lg w-fit p-2 '>
    <div style={{
       width:500,
    }}>
        <div className='flex flex-row items-center justify-between'>
        <h4 className='p-2 m-2 text-sm'>Blood Pleasure</h4>
        <span className='flex flex-row items-center justify-around' >
            <h6 className='text-sm text-gray-600'>Last six month</h6>
            <img className='text-sm text-gray-600 ml-4' src={expand} />
        </span>
        </div>
        <Line  title='Blood Pressure' data={chartData} />
    </div>
    <div className='flex flex-col'>
        <div className='flex items-baseline flex-row'>
            <div className='rounded-full text-7xl text-pink-400'>.</div>
            <div>Systolic</div>
        </div>
        <h4>160</h4>
        <div className='flex flex-row items-center'>
            <img src={arrowup} />
            <span style={{
                fontSize:13,
            }} className='pl-2 font-light'>Higher than Average</span>
        </div>
        <div> 
            <div className='flex items-baseline flex-row'>
                <div className='rounded-full text-7xl text-purple-700'>.</div>
                <div>Diastolic</div>
            </div>
            <h4>70</h4>
            <div className='flex flex-row items-center'>
                <img src={ArrowDown} />
                <span style={{
                fontSize:13,
            }} className='pl-2 font-light'>Lower than Average</span>
            </div>
        </div>
    </div>
</div>


{/* bottom */}

<div className='flex flex-row items-center justify-around'>
    <div style={{
        backgroundColor:"#E0F3FA",
        padding:10, margin:10,
        borderRadius:10,
        textAlign:"left"
    }}>
    <img src={resp} />
    <h3 style={{
        fontSize:13,
    }} className="font-normal">Respiratory Rate</h3>
    <h3 className='font-bold'>{diagnosisHistory[0].respiratory_rate?.value} bpm</h3>
    <h5 style={{
        fontSize:12,
    }} className='font-light pt-2'>{diagnosisHistory[0].respiratory_rate?.levels}</h5>
    </div>


    <div 
    style={{
        backgroundColor:"#FFE6E9",
        padding:10, margin:10,
        borderRadius:10,
        textAlign:"left"
        
    }}
    >
    <img src={temperature} />
    <h3 style={{
        fontSize:13,
    }} className="font-normal">Temparature</h3>
    <h3 className='font-bold'>{diagnosisHistory[0].temperature?.value}</h3>
    <h5 style={{
        fontSize:12,
    }} className='font-light pt-2'>{diagnosisHistory[0].temperature?.levels}</h5>
    </div>
  
    <div style={{
        backgroundColor:"#FFE6F1",
        padding:10, margin:10,
        borderRadius:10,
        textAlign:"left"
        
    }}>
    <img src={heart} />
    <h3 style={{
        fontSize:13,
    }} className="font-normal">Heart Rate</h3>
    <h3 className='font-bold'>{diagnosisHistory[0].heart_rate?.value}</h3>
    <h5 style={{
        fontSize:12,
    }} className='font-light pt-2'>{diagnosisHistory[0].heart_rate?.levels}</h5>
    </div>

 
    </div>
            </div>
            :'loading'}
        </div>
    );
};

export default BloodPressureChart;

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Bar} from  'react-chartjs-2'

const Graph = (props)=>{
            const data = {
                datasets: [{
                    label:'Leads dataset',
                    data:[...props.dataArray,0],
                    barPercentage: 0.5,
                    barThickness: 30,
                    maxBarThickness: 40,
                    backgroundColor:['rgb(255, 51, 51)','rgb(51, 255, 51)','rgb(0, 153, 255)',],
                    hoverBackgroundColor:['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 122, 204)',]
                }],
                labels: [
                    'Rejected',
                    'Converted',
                    'Pending',
                ], 
            };

            const datablank = {
                datasets: [{
                    data: [1,0],
                    label:'Leads dataset',
                    barPercentage: 0.5,
                    barThickness: 30,
                    maxBarThickness: 40,
                    backgroundColor:['rgba(0, 0, 0,0.85)',],
                    hoverBackgroundColor:['rgb(0,0,0)',]
                }],
                labels: [
                    'No Lead',
                ]
                
            };

            return (<Bar data={(props.dataArray.reduce((a,b)=>a+b,0) === 0)?datablank:data}  />)
}

export default Graph
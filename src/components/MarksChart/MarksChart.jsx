import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({markPromise}) => {
    // console.log(markPromise)
    const marksDataRes = use(markPromise)
    // console.log(marksData)
    const marksData = marksDataRes.data;

//   data processing fot the chart



const markChartData = marksData.map(studentData=>{
    const student={
        id: studentData.student_id,
        name: studentData.name,
        physics: studentData.physics,
        chemistry: studentData.chemistry,
        math: studentData.math
    }

const avg = (student.physics + student.chemistry + student.math)/3;
student.avg = avg
    return(student)
})

console.log( markChartData)

    return (
        <div className='mt-20 bg-gray-100 '>
              <BarChart width={700} height={500} data={markChartData}>
                <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Legend></Legend>
              <Bar dataKey={'avg'} fill='blue'></Bar>
              <Bar dataKey={'chemistry'} fill='purple'></Bar>
              </BarChart>
        </div>
    );
};

export default MarksChart;
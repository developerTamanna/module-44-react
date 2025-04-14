import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "student_id": 1,
      "name": "Tamanna",
      "physics": 43,
      "chemistry": 43,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Ayaan",
      "physics": 55,
      "chemistry": 60,
      "math": 72
    },
    {
      "student_id": 3,
      "name": "Nusrat",
      "physics": 78,
      "chemistry": 82,
      "math": 90
    },
    {
      "student_id": 4,
      "name": "Farhan",
      "physics": 66,
      "chemistry": 70,
      "math": 68
    },
    {
      "student_id": 5,
      "name": "Rafi",
      "physics": 80,
      "chemistry": 85,
      "math": 88
    },
    {
      "student_id": 6,
      "name": "Meher",
      "physics": 49,
      "chemistry": 52,
      "math": 60
    },
    {
      "student_id": 7,
      "name": "Sadia",
      "physics": 91,
      "chemistry": 89,
      "math": 95
    },
    {
      "student_id": 8,
      "name": "Imran",
      "physics": 73,
      "chemistry": 76,
      "math": 80
    },
    {
      "student_id": 9,
      "name": "Lamia",
      "physics": 62,
      "chemistry": 65,
      "math": 70
    },
    {
      "student_id": 10,
      "name": "Hasan",
      "physics": 58,
      "chemistry": 60,
      "math": 66
    }
  ]
  



const ResultChat = () => {
    return (
        <div className='mt-20 bg-gray-100'>
            <LineChart width={500} height={500} data={resultData}>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
            <Line dataKey="math" stroke='purple'></Line>
            <Line dataKey={'chemistry' } stroke="blue"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChat;



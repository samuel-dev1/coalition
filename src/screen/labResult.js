
import React from 'react';
import download from '../HealthCareDashboard/download.svg'

const Result = ({ diagnosisHistory }) => {
          console.log(diagnosisHistory)
  return (
    <div className='p-3 bg-white mt-3 rounded-lg'>
      <h4 className='text-gray-500 text-left p-2 font-light'>Lab Result</h4>
  {diagnosisHistory?.map((item, index)=>(
    <div className='flex flex-row items-center justify-between'>
    <h3 className='text-sm  m-2'>{item}</h3>
<img className='w-3 h-3' src={download} />
</div>
  ))}
    </div>
  );
};

export default Result;

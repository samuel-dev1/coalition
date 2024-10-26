import React from 'react';

const Latest = ({ diagnosisHistory }) => {
          console.log(diagnosisHistory)
  return (
    <div style={{
      width:655
    }}>
      <h2 style={{
          fontSize:15,

      }}>Diagnostic List</h2>
      <table style={{ border: 'none', borderCollapse: 'collapse' }} className="min-w-full border-collapse border border-none">
        <thead>
          <tr className='bg-gray-100 p-1 rounded-lg font-light'>
            <th style={{ border: 'none', borderCollapse: 'collapse' }} className="border font-light border-gray-300 p-2">Problem/Diagnosis</th>
            <th style={{ border: 'none', borderCollapse: 'collapse' }} className="border font-light border-gray-300 p-2">Description</th>
            <th style={{ border: 'none', borderCollapse: 'collapse' }} className="border font-light border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosisHistory?.map((item, index) => (
            <tr key={index}>
              <td style={{ border: 'none', borderCollapse: 'collapse', fontSize:13}} className="border border-gray-300 font-light p-2">{item.name}</td>
              <td style={{ border: 'none', borderCollapse: 'collapse',fontSize:13 }} className="border border-gray-300 font-light p-2">{item.description}</td>
              <td style={{ border: 'none', borderCollapse: 'collapse' ,fontSize:13}} className="border border-gray-300 font-light p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Latest;

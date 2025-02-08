import React from 'react';

const ManageApplicationJob = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
        <h1> JOB APPLICATIONS RECIEVED</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>#</th>
            {Array.from({ length: 9}).map((_, index) => (
              <th key={index} style={thTdStyle}>Table Heading {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key={row}>
              <td style={thTdStyle}>{row}</td>
              {Array.from({ length: 9 }).map((_, index) => (
                <td key={index} style={thTdStyle}>
                  Table cell {index + 1} - Row {row}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageApplicationJob;

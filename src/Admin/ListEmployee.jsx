import React from 'react'

export const ListEmployee = () => {
  const dummyData = [
    {"id": "1",
     "title": "Web Dev",
     "Description": "You have to work",
     "Requirement": "Java",
     "Duration": "6 Months",
     "Stipend": "12K",
     "Location": "Nagpur",
     "posted_Date": "12-01-2025",
     "application_Dadeline": "31-01-2025"
    }

  ]
    return (
    <div>
       <h2>List of Job</h2>
       <table>
           <thead>
            <tr>
                <th>Job_id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Requirement</th>
                <th>Duration</th>
                <th>Stipend</th>
                <th>Location</th>
                <th>Posted_Date</th>
                <th>Application_Deadline</th>
            </tr>
           </thead>
           <tbody>
                dummyData.map(job =>
                <tr key = {job.id}>
                  <td> {job.id}</td>
                  <td> {job.title}</td>
                  <td>{job.description}</td>
                  <td>{job.requirement}</td>
                  <td>{job.duration}</td>
                  <td>{job.stipend}</td>
                  <td>{job.location}</td>
                  <td>{job.posted_Date}</td>
                  <td>{job.application_Dadeline}</td>
                </tr>)
           </tbody>
       </table>
    </div>
  )
}

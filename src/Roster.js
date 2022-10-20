import React from "react";

function Roster({ detailed, roster }) {
  const rows = roster.map(({ id, firstName, lastName, location }, index) => {
   if (!detailed) {
     return (
//       <ol>
//         <li>{firstName}</li>
//       </ol>
      <li>{firstName}</li> 
     )
   } 
    return (
        <tr key={index}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>   
          <td>{location}</td>      
        </tr>
    );
  });
  
  if (!detailed) {
    return (
      <ol>
        {rows}
      </ol>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>  
    </table>    
  )
}
export default Roster;

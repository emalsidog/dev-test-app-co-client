// Dependencies
import React from "react";

const Table = ({ list, navigateToProfile }) => {
  const itemsList = list.map((item) => {
    return (
      <tr
        className="table-rows-content"
        key={item.id}
        onClick={() => navigateToProfile(item.id)}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.ip_address}</td>
        <td>{item.total_clicks === null ? "0" : item.total_clicks}</td>
        <td>{item.total_views === null ? "0" : item.total_views}</td>
      </tr>
    );
  });

  return (
    <div className="table-responsive">
      <table className="users-stats table">
        <thead>
          <tr className="table-rows-names">
            <th>Id</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Total clicks</th>
            <th>Total views</th>
          </tr>
        </thead>
        <tbody>{itemsList}</tbody>
      </table>
    </div>
  );
};

export default Table;

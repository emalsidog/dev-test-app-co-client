// Dependencies
import React from "react";

// Components
import LineGraph from "./line-graph";

const MainChart = props => {
  const { name, stats, from, to, onFormSubmit, onFromChange, onToChange, inputError } = props;
  return (
    <div className="container">
      <div className="user-name my-3">{name}</div>

      <h5 className="my-3">Search by date</h5>

      <form className="input-group mb-3" onSubmit={onFormSubmit}>
        <div className="row">
          <div className="col">
            <input placeholder="Input date from (YYYY-MM-DD)" className="form-control" onChange={onFromChange} value={from} />
          </div>

          <div className="w-100 my-1"></div>

          <div className="col">
            <input placeholder="Input date to (YYYY-MM-DD)" className="form-control" onChange={onToChange} value={to} />
            <div className={"error-message"}>
              {
                inputError
              }
            </div>
          </div>
          
          <div className="w-100 my-1"></div>

          <div className="col">
            <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>

      <LineGraph stats={stats} />
    </div>
  );
};

export default MainChart;
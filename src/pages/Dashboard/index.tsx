import React from "react";
import { Filters, Headers, YearlyMovie } from "../../components";
import "./index.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Headers />
      <Filters />
      <YearlyMovie />
    </div>
  );
};

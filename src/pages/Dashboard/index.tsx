import React, { useEffect } from "react";
import { Filters, Headers, YearlyMovie } from "../../components";
import "./index.scss";
import { result } from "../../common/constant";

export const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector("#dashboard-header");
      const elem = document.querySelector("#dashboard-wrapper");
      if (element && elem) {
        const height = element.clientHeight;
        (elem as HTMLElement).style.paddingTop = `${height + 24}px`;
      }
    }, 200);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="fixed-header" id={"dashboard-header"}>
        <Headers />
        <Filters />
      </div>
      <div className="dashboard-wrapper" id="dashboard-wrapper">
        <YearlyMovie year={"2012"} movieData={result} />
        <YearlyMovie year={"2013"} movieData={result} />
        <YearlyMovie year={"2014"} movieData={result} />
      </div>
    </div>
  );
};

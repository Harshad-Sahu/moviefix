import React, { useState, useEffect } from "react";
import {
  Filters,
  Headers,
  VirtualisedYearlyList,
  YearlyMovie,
  // YearlyMovie,
} from "../../components";
import "./index.scss";
import { resultArrays } from "../../common/constant";
// import { result } from "../../common/constant";

export const Dashboard = () => {
  const [years, setYears] = useState<number[]>([]);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const currentYear = new Date();
    let yearsVal = [];
    for (let i = 2012; i <= currentYear?.getFullYear(); i++) {
      yearsVal.push(i);
    }
    setYears(yearsVal);

    setTimeout(() => {
      const element = document.querySelector("#dashboard-header");
      const elem = document.querySelector("#dashboard-wrapper");
      if (element && elem) {
        const height = element.clientHeight;
        (elem as HTMLElement).style.paddingTop = `${height + 24}px`;
        (elem as HTMLElement).style.height = `calc(100% - ${height + 24}px)`;
        setScreenHeight(window?.innerHeight - (height + 24));
      }
    }, 350);
  }, []);

  const setRowHeight = (index: number, size: number) => {};

  return (
    <div className="dashboard-container">
      <div className="fixed-header" id={"dashboard-header"}>
        <Headers />
        <Filters />
      </div>
      <div className="dashboard-wrapper" id="dashboard-wrapper">
        {/* {years?.length && (
          <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
            {years?.map((year, index) => {
              return (
                <YearlyMovie
                  year={`${year}`}
                  movieData={resultArrays[index]}
                  index={index}
                  setRowHeight={setRowHeight}
                />
              );
            })}
          </div>
        )} */}
        {years?.length && (
          <VirtualisedYearlyList screenHeight={screenHeight} years={years} />
        )}
      </div>
    </div>
  );
};

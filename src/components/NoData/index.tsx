import React from "react";
import NoDataImage from "../../Resources/Icon/NoData.svg";
import { NO_DATA_FOUND } from "../../common/constant";
import "./index.scss";

export const NoData = ({ message = NO_DATA_FOUND }) => {
  return (
    <div className="no-data-wrapper">
      <img src={NoDataImage} alt={"No Data Found"} width={80} height={80} />
      <div className="no-text">{message}</div>
    </div>
  );
};

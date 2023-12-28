import React from "react";
import LoaderSVG from "../../Resources/Icon/Loader.svg";
import { LoaderProp } from "../../types";
import "./index.scss";

export const Loader: React.FC<LoaderProp> = ({ height = 20, width = 20 }) => {
  return (
    <div className="loader-wrapper">
      <img src={LoaderSVG} alt={"Loader"} height={height} width={width} />
    </div>
  );
};

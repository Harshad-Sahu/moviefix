import React, { useRef } from "react";
import {
  VariableSizeList as List,
  ListChildComponentProps,
} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "./index.scss";
import { YearlyMovie } from "../YearlyMovie";
import { resultArrays } from "../../common/constant";
import { VirtualisedYearlyListProps } from "../../types";

export const VirtualisedYearlyList: React.FC<VirtualisedYearlyListProps> = ({
  screenHeight,
  years,
}) => {
  const listRef = useRef<List>(null);
  const rowHeights = useRef<{ [key: number]: number }>({});

  const getRowHeight = (index: number) => {
    console.log(
      "rowHeights.current[index]-->",
      index,
      rowHeights.current[index]
    );
    return rowHeights.current[index] + 8 || 82;
  };

  const setRowHeight = (index: number, size: number) => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0);
    }
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  const Row = ({ index }: ListChildComponentProps) => (
    <YearlyMovie
      year={`${years[index]}`}
      movieData={resultArrays[index]}
      index={index}
      setRowHeight={setRowHeight}
    />
  );

  return (
    <AutoSizer style={{ height: "100%", width: "100%" }}>
      {({ height, width }: { height: number; width: number }) => (
        <List
          className="List"
          height={height}
          itemCount={years.length}
          itemSize={getRowHeight}
          ref={listRef}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

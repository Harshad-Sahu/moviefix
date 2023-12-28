import React from "react";
import LazyLoadedImage from "../ImageGrid/LazyLoadedImage";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteScroll from "react-infinite-scroll-component";
import { VariableSizeGrid as Grid } from "react-window";
import { SearchGridProps } from "../../types";

export const VirtualisedGridSearch = ({
  searchData,
  fetchMoreData,
  hasMore,
}: SearchGridProps) => {
  const calculateRowHeight = (index: number) => {
    return ((window.innerWidth - 52) / 2) * 1.5 + 16;
  };

  const calculateColumnWidth = (index: number) => {
    return window.innerWidth / 2;
  };

  const Item: React.FC<{
    rowIndex: number;
    columnIndex: number;
    style: React.CSSProperties;
  }> = ({ rowIndex, columnIndex, style }) => {
    console.log("rowIndex-->", rowIndex);
    const item = searchData[rowIndex * 2 + columnIndex];
    return (
      <div
        style={{
          ...style,
          height: `${((window.innerWidth - 52) / 2) * 1.5 + 16}px`,
          left:
            style.left !== undefined
              ? `${parseInt(style.left as string, 10) + 16}px`
              : undefined,
        }}
        className="lazyload-wrapper"
      >
        {item && (
          <div>
            <LazyLoadedImage
              key={`${item?.id}`}
              alt={`Image ${item?.id}`}
              height={((window.innerWidth - 52) / 2) * 1.5}
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
            />
          </div>
        )}
      </div>
    );
  };
  return (
    <AutoSizer className="autoSizer">
      {({ height, width }: { height: number; width: number }) => {
        return (
          <InfiniteScroll
            dataLength={searchData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Grid
              height={height}
              width={width}
              columnCount={2} // Assuming a single column
              rowCount={searchData?.length / 2} // Set the total number of rows
              itemData={searchData}
              itemKey={({ rowIndex }) => rowIndex} // Unique key for each item
              rowHeight={calculateRowHeight}
              columnWidth={calculateColumnWidth}
            >
              {Item}
            </Grid>
          </InfiniteScroll>
        );
      }}
    </AutoSizer>
  );
};

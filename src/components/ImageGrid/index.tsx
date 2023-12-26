// ImageGrid.tsx
import React from "react";
import { FixedSizeGrid, GridChildComponentProps } from "react-window";
import { ImageGridProps } from "../../types/index";
import LazyLoadedImage from "./LazyLoadedImage";

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columnCount,
  rowHeight,
}) => {
  const cellRenderer = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= images.length) {
      return null;
    }

    const image = images[index];
    return (
      <div key={index} style={style}>
        <LazyLoadedImage
          alt={`Image ${index}`}
          height={rowHeight}
          src={`https://image.tmdb.org/t/p/original/${image?.poster_path}`} // Replace with your image source
        />
      </div>
    );
  };

  return (
    <FixedSizeGrid
      columnCount={columnCount}
      columnWidth={(window.innerWidth - 32) / columnCount}
      rowCount={Math.ceil(images.length / columnCount)}
      rowHeight={rowHeight}
      width={window.innerWidth - 32}
      height={window.innerHeight}
    >
      {cellRenderer}
    </FixedSizeGrid>
  );
};

export default ImageGrid;

// LazyLoadedImage.tsx
import React from "react";
import {
  LazyLoadImage,
  LazyComponentProps,
  trackWindowScroll,
} from "react-lazy-load-image-component";

interface LazyLoadedImageProps {
  src: string;
  alt: string;
  height: number;
}

const LazyLoadedImage: React.FC<LazyLoadedImageProps & LazyComponentProps> = ({
  src,
  alt,
  height,
  scrollPosition,
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={222}
      width={158}
      src={src}
      effect="blur"
      scrollPosition={scrollPosition}
    />
  );
};

export default trackWindowScroll(LazyLoadedImage);

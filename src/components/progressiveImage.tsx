import { FC } from "react";
import NextImage from "next/image";

interface ProgressiveImageProps {
  className?: string;
  placeholderImg?: any;
  src: any;
  alt: string;
}

const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { src, alt, className } = props;

  return (
    <NextImage
      src={src}
      placeholder={"blur"}
      className={className}
      alt={alt}
      fill={false}
    />
  );
};

export default ProgressiveImage;

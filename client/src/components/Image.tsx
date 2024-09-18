type ImagePropType = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Image = ({ src, alt, height, width, className }: ImagePropType) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt ?? "image loading"}
      width={width ?? 100}
      height={height ?? 100}
      loading="lazy"
    />
  );
};

export default Image;

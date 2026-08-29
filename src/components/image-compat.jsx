import React from "react";

export const Image = React.forwardRef(
  (
    { unoptimized, priority, quality, fill, className, style, ...props },
    ref,
  ) => {
    const fillStyle = fill
      ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
          ...style,
        }
      : style || {};

    return <img ref={ref} className={className} style={fillStyle} {...props} />;
  },
);
Image.displayName = "Image";

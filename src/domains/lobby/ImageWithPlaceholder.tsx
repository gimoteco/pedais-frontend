import React, { useState } from "react";
import { Image } from "rebass";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const ImageWithPlaceholder = ({
  url,
  Placeholder = ImagePlaceholder,
  notLoadingDisplay = "block",
  className = undefined,
  ...imageProps
}: any) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {url && (
        <Image
          className={className}
          src={url}
          {...imageProps}
          sx={{
            display: loading ? "none" : notLoadingDisplay,
            ...imageProps.sx
          }}
          onLoad={() => setLoading(false)}
        />
      )}
      {loading && <Placeholder {...imageProps} />}
    </>
  );
};

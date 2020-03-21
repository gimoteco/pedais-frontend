import React, { useState } from "react";
import { Image } from "rebass";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const ImageWithPlaceholder = ({
  url,
  Placeholder = ImagePlaceholder,
  notLoadingDisplay = "block",
  ...imageProps
}: any) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {url && (
        <Image
          src={url}
          {...imageProps}
          sx={{
            objectFit: "cover",
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

import React, { useState } from "react"
import { Image } from "rebass"
import { useValueForBreakpoints } from "../../sharedComponents/breakpoints"
import { getOptimizedImage } from "../../utils/image"
import { ImagePlaceholder } from "./ImagePlaceholder"

export const ImageWithPlaceholder = ({
    url,
    Placeholder = ImagePlaceholder,
    notLoadingDisplay = "block",
    isPast,
    ...imageProps
}: any) => {
    const [loading, setLoading] = useState(true)
    const width = useValueForBreakpoints([
        1024,
        768,
        365,
    ])
    return (
        <>
            {url && (
                <Image
                    src={getOptimizedImage(url, width)}
                    {...imageProps}
                    sx={{
                        objectFit: "cover",
                        display: loading ? "none" : notLoadingDisplay,
                        filter: isPast ? "grayscale(100%)" : "none",
                        ...imageProps.sx
                    }}
                    onLoad={() => setLoading(false)}
                />
            )}
            {loading && <Placeholder {...imageProps} />}
        </>
    )
}

import React from "react";
import { useMediaPredicate } from "react-media-hook";
import { Image } from "rebass";

export const Map = ({ placeName }) => {
    const breakpoints = [
        '40em', '52em', '64em'
    ]

    const isTablet = useMediaPredicate(`(min-width: ${breakpoints[1]})`)
    const isDesktop = useMediaPredicate(`(min-width: ${breakpoints[2]})`)

    let size;
    if (isDesktop) size = [1024, 300]
    else if (isTablet) size = [768, 250]
    else size = [375, 250]

    const [width, height] = size

    return <Image
        width={1}
        height={height}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=&zoom=15&scale=1&size=${width}x${height}&maptype=roadmap&key=AIzaSyDN46Q5BVfXgArF54AqYuwzTbrjhtXJGb8&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7C${placeName}`}
    />
}
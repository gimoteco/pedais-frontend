import React from "react";
import { Image, Link } from "rebass";
import { useValueForBreakpoints } from "./breakpoints";

export const Map = ({ placeName }) => {
    const [width, height] = useValueForBreakpoints([
        [1024, 300],
        [768, 250],
        [375, 250]
    ])

    return <Link target="_blank" href={`https://maps.google.com/?q=${placeName}`}>
        <Image
            sx={{
                objectFit: 'contain'
            }}
            alt={`Map location of ${placeName}`}
            width={1}
            height={height}
            src={`https://maps.googleapis.com/maps/api/staticmap?center=&zoom=13&scale=1&size=${width}x${height}&maptype=roadmap&key=AIzaSyDN46Q5BVfXgArF54AqYuwzTbrjhtXJGb8&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7C${placeName}`}
        />
    </Link>
}
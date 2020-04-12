import React from "react";
import { ImageWithPlaceholder } from "../domains/lobby/ImageWithPlaceholder";
import { IMAGE_HEIGHT } from "../domains/lobby/ImagePlaceholder";
export const ImagePreview = ({ image = undefined, onClick, ...otherProps }: any) => {
    const imageUrl = image && URL.createObjectURL(image);
    return (<ImageWithPlaceholder onClick={onClick} width={1} height={IMAGE_HEIGHT} url={imageUrl} {...otherProps} />);
};

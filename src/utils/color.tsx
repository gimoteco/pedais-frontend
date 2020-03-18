import tinyColor from "tinycolor2";

export function rgba(color: string, alpha: number) {
  return tinyColor(color)
    .setAlpha(alpha)
    .toRgbString();
}

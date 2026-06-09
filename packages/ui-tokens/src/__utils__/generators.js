export const generateScaleFromObject = (colorScale) =>
    Object.entries(colorScale).reduce(
        (aggregate, [key, value]) => ({...aggregate, [key]: value}),
        {},
    );

export const generateSizeValues = (...sizes) => {
    if (sizes.length === 3) {
        return {small: sizes[0], medium: sizes[1], large: sizes[2]};
    }
    return {small: sizes[0], medium: sizes[0], large: sizes[0]};
};

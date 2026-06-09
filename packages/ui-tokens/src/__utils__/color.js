import {TonalPalette, argbFromHex, hexFromArgb} from '@material/material-color-utilities';

const scale = {
    main: undefined,
    lightest: 95,
    lighter: 78,
    light: 65,
    neutral: 50,
    dark: 40,
    darker: 20,
    darkest: 10,
    contrast: 100,
};

export const scaleColor = (baseHex, variant) => {
    if (variant === 'main') {
        return baseHex;
    }

    const argb = argbFromHex(baseHex);
    const toner = TonalPalette.fromInt(argb);
    const toneAmount = scale[variant];
    const newArgb = toner.tone(toneAmount);
    return hexFromArgb(newArgb);
};

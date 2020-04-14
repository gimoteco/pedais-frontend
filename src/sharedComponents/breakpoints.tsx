import { useCallback, useEffect, useState } from "react";
const breakpoints = [
    '64em', '52em', '40em',
];

function useMedia(queries, values, defaultValue) {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    const getValue = useCallback(() => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    }, [mediaQueryLists, defaultValue, values]);

    const [value, setValue] = useState(getValue);

    useEffect(
        () => {
            const handler = () => setValue(getValue);
            mediaQueryLists.forEach(mql => mql.addListener(handler));
            return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
        },
        [mediaQueryLists, mediaQueryLists.length, getValue]
    );

    return value;
}

export function useValueForBreakpoints(values) {
    const currentValue = useMedia(breakpoints.map(b => `(min-width: ${b})`), values, values[0])
    return currentValue;
}

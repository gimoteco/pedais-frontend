import { useEffect, useState } from "react";
const breakpoints = [
    '64em', '52em', '40em',
];

function useMedia(queries, values, defaultValue) {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    const getValue = () => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(
        () => {
            const handler = () => setValue(getValue);
            mediaQueryLists.forEach(mql => mql.addListener(handler));
            return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
        },
        []
    );

    return value;
}

export function useValueForBreakpoints(values) {
    const currentValue = useMedia(breakpoints.map(b => `(min-width: ${b})`), values, values[0])
    return currentValue;
}

import { rgba } from "./utils/color"

const colors = {
    primary: "#EA3A3A",
    secondary: "#4758D6",
    white: "#EEEDED",
    black: "#201C1C",
    text: "#201C1C",
    positive: "#5BAB5E",
    negative: "#EA3A3A"
}

const defaultInputStyle = {
    color: "text",
    border: "none",
    borderRadius: 0,
    borderBottomWidth: 1,
    fontFamily: "body",
    borderBottomStyle: "solid",
    borderBottomColor: "text",
    padding: 1,
    "&::placeholder": {
        color: "text",
        opacity: 0.8
    }
}

const defaultLabelStyle = {
    color: "text",
    fontFamily: "heading",
    fontSize: 1,
    fontWeight: "bold",
    textTransform: "uppercase"
}

const defaultButton = {
    width: "100%",
    fontFamily: "body",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 3,
    fontSize: [1, 2],
    svg: {
        marginRight: 2
    }
}

const defaultMenuItem = {
    color: "white",
    fontSize: [1, 2],
    cursor: "pointer",
    fontFamily: "heading",
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottom: "2px solid transparent",
    paddingBottom: 2,
    "&.active": {
        borderBottom: "2px solid white"
    },
    "&.disabled": {
        opacity: 0.2,
        cursor: "default"
    },
    "&:hover:not(.disabled)": {
        borderBottom: `2px solid ${rgba(colors.white, 0.8)}`,
        opacity: 0.8
    },
    "&:not(:last-of-type)": {
        mr: 3
    },
}

export const theme = {
    colors,
    fonts: {
        heading: "'Source Sans Pro', sans-serif",
        body: "'Source Sans Pro', sans-serif",
        serif: "'Source Sans Serif', serif"
    },
    text: {
        heading: {
            textTransform: "uppercase"
        },
        value: {
            fontWeight: "bold",
            fontFamily: "heading",
            whiteSpace: "nowrap",
            fontSize: 2
        }
    },
    buttons: {
        primary: {
            ...defaultButton
        },
        secondary: {
            ...defaultButton,
            bg: "secondary",
            color: "white",

            "&:not(:last-child)": {
                marginBottom: 2
            }
        },
        transparent: {
            ...defaultButton,
            borderColor: "white",
            borderWidth: 1,
            borderStyle: "solid",
            bg: "transparent",

        }
    },
    variants: {
        "menu-item": defaultMenuItem,
        "secondary-menu-item": {
            ...defaultMenuItem,
            color: "text"
        }
    },
    forms: {
        label: {
            ...defaultLabelStyle,
            login: {
                ...defaultLabelStyle,
                color: "white"
            }
        },
        unit: {
            color: "text",
            fontFamily: "body",
            fontWeight: "bold"
        },
        switch: {
            backgroundColor: "white",
            borderColor: "secondary",
            "&[aria-checked=true]": {
                backgroundColor: rgba(colors.secondary, 0.4),
            },
            thumb: {
                backgroundColor: "secondary",
                borderColor: "secondary"
            }
        },
        textarea: {
            color: "text",
            fontFamily: "body",
            height: "5em",
            border: "none",
            borderRadius: 0,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "text",
            padding: 1,
            "&::placeholder": {
                color: "text",
                opacity: 0.8
            }
        },
        input: {
            ...defaultInputStyle,
            login: {
                ...defaultInputStyle,
                color: "white",
                borderBottomColor: "white",
                "&::placeholder": {
                    ...defaultInputStyle["&::placeholder"],
                    color: "white"
                }
            }
        }
    }
}

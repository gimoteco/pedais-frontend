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
};

const defaultLabelStyle = {
  color: "text",
  fontFamily: "heading",
  fontSize: 1,
  fontWeight: "bold",
  textTransform: "uppercase"
};

const defaultButton = {
  width: "100%",
  fontFamily: "body",
  fontWeight: "bold",
  textTransform: "uppercase",
  padding: 3,
  fontSize: 3,
  svg: {
    marginRight: 2
  }
};

export const theme = {
  colors: {
    primary: "#EA3A3A",
    secondary: "#4758D6",
    white: "#EEEDED",
    black: "#201C1C",
    text: "#201C1C",
    positive: "#5BAB5E"
  },
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
      bg: "transparent"
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
};

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
    value: {
      fontWeight: "bold",
      fontFamily: "heading",
      whiteSpace: "nowrap",
      fontSize: 2
    }
  },
  buttons: {
    transparent: {
      borderColor: "white",
      borderWidth: 1,
      borderStyle: "solid",
      bg: "transparent",
      width: "100%",
      fontFamily: "body",
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  forms: {
    label: {
      color: "white",
      fontFamily: "heading",
      fontSize: 1,
      fontWeight: "bold",
      textTransform: "uppercase"
    },
    input: {
      color: "white",
      border: "none",
      borderRadius: 0,
      borderBottomWidth: 1,
      fontFamily: "body",
      borderBottomStyle: "solid",
      borderBottomColor: "white",
      padding: 1,
      "&::placeholder": {
        color: "white",
        opacity: 0.8
      }
    }
  }
};

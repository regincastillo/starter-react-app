import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// eslint-disable-next-line import/no-cycle

export const primaryColor = "#cf689d";
export const secondaryColor = "#7164da";
export const defaultBorderColor = "#FFFFFF";
export const defaultContainerColor = "#F2F2F2";
export const defaultDividerColor = "#C4C4C4";
export const defaultDisabledBackgroundColor = "#E6E6E6";
export const dhlYellowColor = "#FFCC00";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: dhlYellowColor,
    },
  },
});


const CustomTheme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "body": {
          background: "#f5f5f5",
        },
        "html": {
          background: "#f5f5f5",

        },
        ".text-underline": {
          textDecoration: "underline!important",
        },
        ".new-times": {
          fontFamily: "Times New Roman!important"
        },
        ".text-red": {
          color: `${primaryColor}!important`,
        },
        ".text-grey": {
          color: "#707070",
        },

        ".text-light-grey": {
          color: "#B2B2B2",
        },

        ".text-center": {
          textAlign: "center",
        },

        ".pointer": {
          "cursor": "pointer",
          ":hover": {
            opacity: 0.7,
          },
        },
        ".text-bold": {
          fontWeight: "bold!important",
        },
        ".subtitle3": {
          fontSize: "1.25rem!important",
        },
        ".mt-1": {
          marginTop: ".5rem!important",
        },
        ".mt-2": {
          marginTop: "1.5rem!important",
        },
        ".mt-3": {
          marginTop: "2.5rem!important",
        },
        ".mb-1": {
          marginBottom: ".5rem!important",
        },
        ".mb-2": {
          marginBottom: "1.5rem!important",
        },
        ".mb-3": {
          marginBottom: "2.5rem!important",
        },
        ".mr-1": {
          marginInlineEnd: ".5rem!important",
        },
        ".mr-2": {
          marginInlineEnd: "1.5rem!important",
        },
        ".mr-3": {
          marginInlineEnd: "2.5rem!important",
        },
        ".ml-1": {
          marginInlineStart: ".5rem!important",
        },
        ".ml-2": {
          marginInlineStart: "1.5rem!important",
        },
        ".ml-3": {
          marginInlineStart: "2.5rem!important",
        },
        ".Mui-error": {
          color: primaryColor,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: defaultDividerColor,
        },
      },
    },


    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: "0.875rem",
        },
        subtitle1: {
          fontSize: "0.75rem",
        },
        subtitle2: {
          fontSize: "1.5rem",
        },
        body2: {
          fontSize: "1rem",
        },
        h3: {
          fontSize: "2.5rem",
        },
        h4: {
          fontSize: "2.25rem",
        },
        h5: {
          fontSize: "2rem",
        },
        h6: {
          fontSize: "1.125rem",
        },
      },
    },
    
  },
});

export default CustomTheme;

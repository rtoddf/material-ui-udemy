import { createMuiTheme } from '@material-ui/core/styles';

// https://material-ui.com/customization/default-theme/?expand-path=$.palette

const arcBlue = "#0b72b9",
    arcOrange = "#ffba60";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        }
    },
    typography: {
        // extending custom variants
        tab: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
        },
        button: {
            color: "#0b72b9",
            fontSize: "1rem",
            textTransform: "none"
        },
    },
    
})

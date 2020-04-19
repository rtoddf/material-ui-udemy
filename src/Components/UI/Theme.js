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
        h3: {
            fontWeight: 300
        }
    }
})

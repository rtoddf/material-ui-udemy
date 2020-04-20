import React from "react";
import { AppBar, Toolbar, Tabs, Typography, Button } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        //spreading
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.button,
        height: "45px",
        marginRight: "25px",
        marginLeft: "50px",
        borderRadius: "50px",
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <>
            <ElevationScroll>
                <AppBar postition="fixed" color="primary">
                    <Toolbar disableGutters>
                        <img alt="company logo" className={classes.logo} src={logo} />
                        {/* <Typography variant="h3">
                            Arc Development
                        </Typography> */}
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home" />
                            <Tab className={classes.tab} label="Services" />
                            <Tab className={classes.tab} label="The Revolution" />
                            <Tab className={classes.tab} label="About Us" />
                            <Tab className={classes.tab} label="Contact Us" />
                        </Tabs>
                        <Button className={classes.button} variant="contained" color="secondary">Estimates</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
//     window: PropTypes.func,
// };  
    
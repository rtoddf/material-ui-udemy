import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
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
    
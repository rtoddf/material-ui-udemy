import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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


export default function Header(props) {
    return (
        <ElevationScroll>
            <AppBar postition="fixed" color="primary">
                <Toolbar>
                    Arc Development
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    };  
    
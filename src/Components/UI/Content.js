
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        backgroundColor: "orange",
        color: "white",
        padding: 10,
        borderRadius: 3
    }
});

class Content extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ipsum sed dolor commodo dictum. Pellentesque purus nibh, accumsan non tellus id, vehicula maximus dolor. Vivamus imperdiet volutpat sapien, vel maximus nisi euismod in. Praesent laoreet at nunc a lobortis. Vestibulum arcu orci, consequat id libero eu, posuere luctus odio. Quisque laoreet iaculis gravida. Fusce tincidunt diam venenatis tellus finibus rutrum. Morbi id velit lorem. Nunc ac risus iaculis lorem fermentum dignissim. Nullam id sollicitudin orci, ac hendrerit sem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ipsum sed dolor commodo dictum. Pellentesque purus nibh, accumsan non tellus id, vehicula maximus dolor. Vivamus imperdiet volutpat sapien, vel maximus nisi euismod in. Praesent laoreet at nunc a lobortis. Vestibulum arcu orci, consequat id libero eu, posuere luctus odio. Quisque laoreet iaculis gravida. Fusce tincidunt diam venenatis tellus finibus rutrum. Morbi id velit lorem. Nunc ac risus iaculis lorem fermentum dignissim. Nullam id sollicitudin orci, ac hendrerit sem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ipsum sed dolor commodo dictum. Pellentesque purus nibh, accumsan non tellus id, vehicula maximus dolor. Vivamus imperdiet volutpat sapien, vel maximus nisi euismod in. Praesent laoreet at nunc a lobortis. Vestibulum arcu orci, consequat id libero eu, posuere luctus odio. Quisque laoreet iaculis gravida. Fusce tincidunt diam venenatis tellus finibus rutrum. Morbi id velit lorem. Nunc ac risus iaculis lorem fermentum dignissim. Nullam id sollicitudin orci, ac hendrerit sem.</p>
            </div>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Content);
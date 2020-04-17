import React, { Fragment } from 'react';
import Header from "./UI/Header";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                {[...new Array(120)]
                    .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </Fragment>
        )
    }
}

export default App;
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/Theme';
import Header from "./UI/Header";
import Content from "./UI/Content";

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header />
                {/* {[...new Array(120)]
                    .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')} */}
                <Content />
            </ThemeProvider>
        )
    }
}

export default App;
import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import * as CSSModules from 'react-css-modules';

import * as styles from "./App.scss";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";

@CSSModules(styles)
export class App extends Component {
    render() {
        return (
            <div styleName="App">
                <HelloWorld />
            </div>
        );
    }
}

  
render(<App />, document.getElementById("index"));
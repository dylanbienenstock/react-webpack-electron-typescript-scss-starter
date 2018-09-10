import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import * as CSSModules from 'react-css-modules';

import * as styles from "./HelloWorld.scss";


@CSSModules(styles)
export class HelloWorld extends Component {
    render() {
        return (
            <div styleName="HelloWorld">
                <div styleName="card">
                    <div>React</div>
                    <div>+ Electron</div>
                    <div>+ TypeScript</div>
                    <div>+ Modular SCSS</div>
                </div>
            </div>
        );
    }
}
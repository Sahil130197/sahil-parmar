import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="classcompointro">class compo Intro</Link></li>
                    <li><Link to="JSXExampleClass">class compo JSX</Link></li>
                    <li><Link to="PropsExample">class compo Props</Link></li>
                    <li><Link to="StateExample">class compo State</Link></li>
                    <li><Link to="compolifecycle">class compo Life Cycle</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompoMenu;
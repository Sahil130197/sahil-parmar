import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import ClassCompoJSXExample from './02ClassCompoJSXExample.jsx';
import ClassCompoPropsExample from './03ClassCompoPropsExample.jsx';
import ClassCompoStateExample from './04ClassCompoStateExample.jsx';
import ClassLifeCycleExample from './05ClassLifeCycleExample.jsx';


class ClassCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="ClassCompoIntro" element={<ClassCompoIntro />} />
                        <Route path="JSXExampleClass" element={<ClassCompoJSXExample />} />
                        <Route path="PropsExample" element={<ClassCompoPropsExample />} />
                        <Route path="StateExample" element={<ClassCompoStateExample />} />
                        <Route path="compolifecycle" element={<ClassLifeCycleExample />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;
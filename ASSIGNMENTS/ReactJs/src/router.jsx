import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./commonCompo/header";
import HomeCompo from "./Home.jsx";
import About from "./about.jsx";
import Example from "./Example.jsx";
import React, { Suspense } from "react";

// const ClassCompoRoute = React.lazy(()=>{return import('./Component/ClassComponent/ClassCompoRouter')})
const ClassCompoRoute = React.lazy(()=>  import('./Component/ClassComponent/ClassCompoRouter'))
const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderCompo /><HomeCompo /></>,
  },
  {
    path: "/about",
    element: <><HeaderCompo /><About /></>,
  },
  {
    path: "/examples",
    element: <><HeaderCompo /><Example /></>,
    children: [
      {
        path: "classcompo/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompoRoute/></Suspense>
      }
    ]

  },
]);

export default MainRouter;
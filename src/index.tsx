import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello } from "./components/Hello"

ReactDOM.render(
    <div className="stu"><Hello compiler="TypeScript" framework="React" /></div>,
    document.getElementById("example")
)
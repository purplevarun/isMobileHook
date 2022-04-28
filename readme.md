[![version](https://img.shields.io/npm/v/ismobilehook.svg)](https://www.npmjs.com/package/ismobilehook)
[![minified size](https://img.shields.io/bundlephobia/min/ismobilehook.svg)](https://www.npmjs.com/package/ismobilehook)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/ismobilehook.svg)](https://www.npmjs.com/package/ismobilehook)
[![downloads](https://img.shields.io/npm/dt/ismobilehook.svg)](https://www.npmjs.com/package/ismobilehook)

# Demo

<img src="https://github.com/purplevarun/isMobileHook/blob/main/demo.gif?raw=true" alt="Demo Gif (visit GH page if not rendered)"/>

# Installation

## For NPM

        npm i ismobilehook

## For Yarn

        yarn add ismobilehook

# Usage

        import React from "react";
        // importing the function
        import { isMobile } from "ismobilehook";

        const App = () => {
            return (
                <h1>
                    // calling the function
                    {isMobile() ? "Mobile" : "Desktop"} // returns a boolean value
                </h1>
            )
        }
        export default App;

### Author - Varun Kedia (github.com/purplevarun)

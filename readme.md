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

### Source Code : https://github.com/purplevarun/isMobileHook

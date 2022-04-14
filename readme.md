# Installation

## For NPM

        npm i ismobilehook

## For Yarn

        yarn add ismobilehook

# USAGE

        import React from "react";
        import { isMobile } from "ismobilehook"; // importing the function

        const App = () => {
            return (
                <h1>
                    {isMobile()?"Mobile":"Desktop"}  // calling the function
                </h1>
            )
        }
        export default App;

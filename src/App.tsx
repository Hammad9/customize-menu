import React from "react";
import "./app.css";
import ThemeColorPresets from "./components/ThemeColorPresets";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./BuilderLayoutContext";
import ThemeProvider from "../src/theme";
import {routes} from '../src/routes'

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider>
          <ThemeColorPresets>
            <MotionLazyContainer>
              <RouterProvider router={routes} />
            </MotionLazyContainer>
          </ThemeColorPresets>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;

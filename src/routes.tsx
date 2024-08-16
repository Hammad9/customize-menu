import { defaultCraftState } from "./constants/defaultCraftState";
import { createBrowserRouter } from "react-router-dom";
import BuilderScreen from "./sections/builderScreen";
import ViewScreen from "./sections/viewScreen";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <BuilderScreen />,
  },
  {
    path: "/preview",
    element: (
      <ViewScreen
        data={{
          craftState: localStorage.getItem("state") || defaultCraftState,
        }}
      />
    ),
  },
]);

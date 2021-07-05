import { createContext } from "react";

export const backgroundColors = {
  primary: "pink",
  blue: "blue",
  green: "green",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.blue,
  changeColor: () => {},
});

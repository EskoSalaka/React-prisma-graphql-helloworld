import React, { FunctionComponent } from "react";
import "./App.css";
import HelloWorldHeader from "./components/HelloWorldHeader";
import AllRecipes from "./components/AllRecipes";
import AddNewRecipe from "./components/AddNewRecipe";
import { Box } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <HelloWorldHeader
        title={"Hello World!"}
        paragraph={"This is a small app to try out react, graphql and prisma"}
      ></HelloWorldHeader>
      <AddNewRecipe />
      <AllRecipes />
    </div>
  );
};

export default App;

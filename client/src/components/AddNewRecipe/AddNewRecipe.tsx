import React, { useState, FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import ADD_NEW_RECIPE from "../../graphql/AddNewRecipe";

import { RecipeCreateInput } from "../../../../prisma-react-hw/generated/prisma-client/index";
import { Box } from "@material-ui/core";

const AddNewRecipe: FunctionComponent = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  console.log(title);

  const [newRecipe, { error, data }] = useMutation<RecipeCreateInput>(
    ADD_NEW_RECIPE,
    {
      variables: { data: { title: title, ingredients: ingredients } }
    }
  );

  return (
    <Box>
      <h3>Add a new recipe</h3>
      {error ? <p> {error.message}</p> : null}
      {data ? <p>Saved!</p> : null}
      <div>
        <p>
          <label>Title</label>
          <input name="title" onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Ingrs</label>
          <input
            name="ingredients"
            onChange={e => setIngredients(e.target.value)}
          />
        </p>

        <button onClick={() => title && ingredients && newRecipe()}>Add</button>
      </div>
    </Box>
  );
};

export default AddNewRecipe;

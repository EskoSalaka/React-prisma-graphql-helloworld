import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid
} from "@material-ui/core";
import GET_ALL_RECIPES from "../../graphql/GetAllRecipes";

import { Recipe } from "../../../../prisma-react-hw/generated/prisma-client/index";

type Recipes = {
  recipes: Recipe[];
};

const AllRecipes: FunctionComponent = () => {
  const { loading, data } = useQuery<Recipes>(GET_ALL_RECIPES);

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <h3>Here are the stuff from the database</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Box maxWidth="600px">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Title</b>
                </TableCell>
                <TableCell>
                  <b>Ingredients</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.recipes.map(recipe => (
                  <TableRow>
                    <TableCell>{recipe.title}</TableCell>
                    <TableCell>{recipe.ingredients}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Grid>
  );
};

export default AllRecipes;
